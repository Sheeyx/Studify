import React, { useState, useEffect } from "react";
import { Article } from "../../../libs/types/article";
import CreateArticle from "./CreateArticle";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import ArticleService from "../../../services/ArticleService";
import ArticleList from "./ArticleList";


const ArticleParentComponent: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCreateClick = () => setIsCreating(true);
  const handleBackClick = () => setIsCreating(false);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articleService = new ArticleService();
        const articleData = await articleService.getArticles();
        setArticles(articleData);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const handleEdit = (updatedArticle: Article) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article._id === updatedArticle._id ? updatedArticle : article
      )
    );
  };

  const handleRemove = async (articleId: string) => {
    try {
      const articleService = new ArticleService();
      await articleService.removeArticle(articleId);
      setArticles((prevArticles) => prevArticles.filter((article) => article._id !== articleId));
    } catch (error) {
      console.error("Error removing article:", error);
    }
  };

  const handleCreateSuccess = (newArticle: Article) => {
    setArticles((prevArticles) => [...prevArticles, newArticle]);
    setIsCreating(false);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => setOpenSnackbar(false);

  return (
    <div>
      <h2>Article List</h2>
      {!isCreating ? (
        <>
          <button className="create-button" onClick={handleCreateClick}>
            Create
          </button>
          <ArticleList articles={articles} onEdit={handleEdit} onRemove={handleRemove} />
        </>
      ) : (
        <>
          <button className="create-button back-button" onClick={handleBackClick}>
            Back
          </button>
          <CreateArticle onCreateSuccess={handleCreateSuccess} />
        </>
      )}

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert onClose={handleCloseSnackbar} severity="success" elevation={6} variant="filled">
          Article created successfully!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default ArticleParentComponent;
