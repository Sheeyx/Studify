import React, { useState } from "react";
import { IconButton, TextField, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Article, ArticleUpdate } from "../../../../libs/types/article";
import "./styles.scss";
import ArticleService from "../../../../services/ArticleService";

interface ArticleListProps {
  articles: Article[];
  onEdit: (article: Article) => void;
  onRemove: (articleId: string) => void;
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, onEdit, onRemove }) => {
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleEditClick = (article: Article) => {
    setEditingArticle(article);
    setImageFile(null);
  };

  const handleCancelEdit = () => {
    setEditingArticle(null);
    setImageFile(null);
  };

  const handleSaveEdit = async () => {
    if (editingArticle) {
      try {
        const articleService = new ArticleService();
        const articleUpdateInput: ArticleUpdate = {
          _id: editingArticle._id,
          articleTitle: editingArticle.articleTitle,
          articleContent: editingArticle.articleContent,
        };

        const updatedArticle = await articleService.updateArticle(
          editingArticle._id,
          articleUpdateInput,
          imageFile ?? undefined
        );

        onEdit(updatedArticle);
        setEditingArticle(null);
        setImageFile(null);
      } catch (error) {
        console.error("Failed to update article:", error);
      }
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImageFile(event.target.files[0]);
    }
  };

  return (
    <div className="article-list-table">
      {!editingArticle ? (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Content</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article, index) => (
              <tr key={article._id}>
                <td>{index + 1}</td>
                <td>{article.articleTitle}</td>
                <td>{article.articleContent || "N/A"}</td>
                <td className="article-actions">
                  <IconButton
                    onClick={() => handleEditClick(article)}
                    aria-label="edit"
                    color="primary"
                    className="icon-button"
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    onClick={() => onRemove(article._id)}
                    aria-label="delete"
                    color="secondary"
                    className="icon-button"
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="edit-article-form">
          <h3>Edit Article</h3>
          <TextField
            label="Title"
            value={editingArticle.articleTitle}
            onChange={(e) =>
              setEditingArticle({ ...editingArticle, articleTitle: e.target.value })
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Content"
            value={editingArticle.articleContent || ""}
            onChange={(e) =>
              setEditingArticle({
                ...editingArticle,
                articleContent: e.target.value,
              })
            }
            fullWidth
            margin="normal"
          />
          <div className="image-upload">
            <label htmlFor="image-upload-input">Upload Image:</label>
            <input
              type="file"
              id="image-upload-input"
              accept="image/*"
              onChange={handleImageChange}
            />
            {imageFile && (
              <div className="image-preview">
                <img
                  src={URL.createObjectURL(imageFile)}
                  alt="Preview"
                  width="100"
                />
              </div>
            )}
          </div>
          <div className="edit-buttons">
          <Button
              variant="text"
              style={{
                color: "white",
                backgroundColor: "#ff8225",
                width: "80px",
                textTransform: "none",
              }}
              onClick={handleSaveEdit}
            >
              Save
            </Button>
            <Button
              style={{ color: "black", width: "80px" }}
              onClick={handleCancelEdit}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleList;
