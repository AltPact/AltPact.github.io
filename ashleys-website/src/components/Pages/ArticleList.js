import React from 'react';
// import Article from './Article';
import Article from './Article';

import './Articles.css'

const articlesData = [
    { id: 1, title: 'The three ways games can tell story', content: 'Content of Article 1', tag: 'games'  },
    { id: 2, title: 'Death is inevitable - Outer wilds', content: 'Content of Article 2', tag: 'games' },
    { id: 3, title: 'Can stories really end anymore/Is there an end in sight?', content: 'Talking about Marvel, technology with Twitter. Do we have an end goal as a society?', tag: 'games' },
    { id: 4, title: 'Why the Metaverse failed where VRChat succeed', content: 'Content of Article 4', tag: 'pie'  },
    // Add more articles as needed
    // add extra tag to make a difference between "games, technology, up-to-date stuff"
  ];

  const ArticleList = () => {
    return (
        <div className="article-list">
          {articlesData.map((article) => (
            <Article key={article.id} title={article.title} content={article.content} tag={article.tag} />
          ))}
        </div>
      );
    }

export default ArticleList;