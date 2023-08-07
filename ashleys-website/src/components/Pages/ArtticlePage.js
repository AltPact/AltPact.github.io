// ArticlePage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import articleData from './ArticleList'; // Your article data source

const ArticlePage = () => {
  const { id } = useParams();
  const articleId = parseInt(id, 10);
  const article = articleData.find(article => article.id === articleId);
  
  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.fullContent}</p>
    </div>
  );
};

export default ArticlePage;