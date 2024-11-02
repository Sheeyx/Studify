import React, { useState } from "react";
import { TextField, Button, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { Article, ArticleInput } from "../../../../libs/types/article";
import ArticleService from "../../../../services/ArticleService";


interface CreateArticleProps {
  onCreateSuccess: (article: Article) => void;
}

const CreateArticle: React.FC<CreateArticleProps> = ({ onCreateSuccess }) => {
  const [articleTitle, setArticleTitle] = useState("");
  const [articleContent, setArticleContent] = useState("");
  const [articleImage, setArticleImage] = useState<File | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCreateArticle = async () => {
    try {
      const articleService = new ArticleService();
      const articleInput: ArticleInput = { articleTitle, articleContent };

      const newArticle = await articleService.createArticle(articleInput, articleImage ?? undefined);
      onCreateSuccess(newArticle);

      setOpenSnackbar(true);

      // Reset form fields
      setArticleTitle("");
      setArticleContent("");
      setArticleImage(null);
    } catch (error) {
      console.error("Failed to create article:", error);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setArticleImage(event.target.files[0]);
    }
  };

  const handleCloseSnackbar = () => setOpenSnackbar(false);

  return (
    <div className="create-article-form">
      <h3>Create New Article</h3>
      <TextField
        label="Title"
        value={articleTitle}
        onChange={(e) => setArticleTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Content"
        value={articleContent}
        onChange={(e) => setArticleContent(e.target.value)}
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />

      <div className="file-inputs">
        <label htmlFor="image-upload-input">Upload Image:</label>
        <input type="file" id="image-upload-input" accept="image/*" onChange={handleImageChange} />
        {articleImage && (
          <div className="image-preview">
            <img src={URL.createObjectURL(articleImage)} alt="Preview" width="100" />
          </div>
        )}
      </div>

      <Button
        variant="contained"
        color="primary"
        onClick={handleCreateArticle}
        style={{ marginTop: "20px" }}
      >
        Create Article
      </Button>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert onClose={handleCloseSnackbar} severity="success" elevation={6} variant="filled">
          Article created successfully!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default CreateArticle;
