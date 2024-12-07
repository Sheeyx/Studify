import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./styles.scss";
import { serverApi } from "../../../../libs/types/config";
import UnilogosService, { UniLogo } from "../../../../services/UniLogosService";

const UniLogosList: React.FC = () => {
  const [results, setResults] = useState<UniLogo[]>([]);

  const fetchResults = async () => {
    try {
      const unilogosService = new UnilogosService();
      const data = await unilogosService.getAllResults();
      setResults(data);
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  const handleRemove = async (id: string) => {
    try {
      const unilogosService = new UnilogosService();
      await unilogosService.removeResult(id);
      setResults(results.filter((result) => result._id !== id));
    } catch (error) {
      console.error("Error removing result:", error);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div className="result-list">
      {results.map((result, imgIndex) => (
        <div key={result._id} className="result-item">
          <span>{imgIndex + 1}</span> {/* Display order number in a span */}
          <img
            src={`${serverApi}/${result.unilogosImages}`} // Ensure correct image URL
            alt={`Result ${imgIndex}`}
            className="result-image"
          />
          <div className="result-info">
            {/* Display result image name if resultImages is a File object */}
            <p className="result-name">
            {typeof result.unilogosImages === "string"
                ? result.unilogosImages.split("/").pop() // Get the file name from the path
                : "Unnamed Image"}
            </p>
            <DeleteIcon
              className="remove-icon"
              onClick={(e) => {
                e.stopPropagation();
                handleRemove(result._id);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UniLogosList;
