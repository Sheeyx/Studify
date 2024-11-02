import axios from "axios";
import { serverApi } from "../libs/types/config";
import { Article, ArticleInput, ArticleUpdate } from "../libs/types/article";

class ArticleService {
  private readonly path: string;

  constructor() {
    this.path = `${serverApi}/article`;
  }

  public async createArticle(input: ArticleInput, image?: File): Promise<Article> {
    try {
      const formData = new FormData();
      formData.append("articleTitle", input.articleTitle);
      formData.append("articleContent", input.articleContent);
      if (image) formData.append("image", image);

      const result = await axios.post(`${this.path}/create`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("createArticle", result);
      return result.data;
    } catch (err) {
      console.error("Error creating article:", err);
      throw err;
    }
  }

  public async getArticles(): Promise<Article[]> {
    try {
      const result = await axios.get(`${this.path}/all`, {
        withCredentials: true,
      });
      console.log("getArticles", result);
      return result.data;
    } catch (err) {
      console.error("Error fetching articles:", err);
      throw err;
    }
  }

  public async getArticleById(id: string): Promise<Article> {
    try {
      const result = await axios.get(`${this.path}/${id}`, {
        withCredentials: true,
      });
      console.log("getArticleById", result);
      return result.data;
    } catch (err) {
      console.error("Error fetching article by ID:", err);
      throw err;
    }
  }

  public async updateArticle(id: string, input: ArticleUpdate, image?: File): Promise<Article> {
    try {
      const formData = new FormData();
      if (input.articleTitle) formData.append("articleTitle", input.articleTitle);
      if (input.articleContent) formData.append("articleContent", input.articleContent);
      if (image) formData.append("image", image);

      const result = await axios.post(`${this.path}/update/${id}`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("updateArticle", result);
      return result.data;
    } catch (err) {
      console.error("Error updating article:", err);
      throw err;
    }
  }

  public async removeArticle(id: string): Promise<void> {
    try {
      const result = await axios.post(`${this.path}/remove/${id}`, {}, {
        withCredentials: true,
      });
      console.log("removeArticle", result);
    } catch (err) {
      console.error("Error removing article:", err);
      throw err;
    }
  }
}

export default ArticleService;
