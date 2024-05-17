// src/News.js
import React from 'react';
import { useParams } from 'react-router-dom';

const News = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>News Page</h1>
      <p>ID: {id}</p>
    </div>
  );
};

export default News;
