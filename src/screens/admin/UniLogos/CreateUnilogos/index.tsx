import React, { useState } from "react";
import "./styles.scss"; 
import {
  Button,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  CardMedia,
} from "@mui/material";
import ResultService, {
  Result,
  ResultInput,
} from "../../../../services/ResultService";
import { serverApi } from "../../../../libs/types/config";
import UnilogosService, { UniLogo, UniLogoInput } from "../../../../services/UniLogosService";

const CreateUniLogos: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadedImages, setUploadedImages] = useState<UniLogo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      setErrorMessage("Please select an image to upload.");
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const unilogoService = new UnilogosService();
      const input: UniLogoInput = { unilogosImages: file };
      const newResult = await unilogoService.createResult(input);


      setUploadedImages((prevImages) => [...prevImages, newResult]);
      setFile(null); 
    } catch (error) {
      console.error("Error creating result:", error);
      setErrorMessage("Failed to create result. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="create-result-container">
      <Card className="create-result-card">
        <CardContent>
          <Typography variant="h5" className="card-title">
            Create Result
          </Typography>

          <div className="file-input-container">
            <Button
              variant="contained"
              component="label"
              className="upload-button"
            >
              Upload Image
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
            {file && (
              <Typography variant="body2" className="file-name">
                {file.name}
              </Typography>
            )}
          </div>

          {errorMessage && (
            <Typography color="error" className="error-message">
              {errorMessage}
            </Typography>
          )}

          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={isLoading || !file}
            className="submit-button"
          >
            {isLoading ? <CircularProgress size={24} /> : "Create"}
          </Button>
        </CardContent>
      </Card>

      <div className="uploaded-images">
        {uploadedImages.map((image) => (
          <Card key={image._id} className="uploaded-image-card">
            <CardMedia
              component="img"
              image={`${serverApi}/${image.unilogosImages}`}
              alt={`Uploaded Image ${image._id}`}
              className="uploaded-image"
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CreateUniLogos;
