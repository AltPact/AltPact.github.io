import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const FullArticle = ({ articles, match }) => {
  const { params } = match;
  const article = articles[params.index];

  return (
    <div className="full-article">
      <h1>{article.title}</h1>
      <img src={article.image} alt={article.title} />
      <p>{article.content}</p>
    </div>
  );
};

export default FullArticle;