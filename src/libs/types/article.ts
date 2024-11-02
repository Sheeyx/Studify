export interface Article {
    _id: string;
    articleTitle: string;
    articleContent: string;
    articleImage: string;
  
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface ArticleInput {
    articleTitle: string;
    articleContent: string;
    articleImage?: string;
  }
  
  export interface ArticleUpdate {
    _id: string;
    articleTitle?: string;
    articleContent?: string;
    articleImage?: string;
  }