// src/Blog.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Blog = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Blog Page</h1>
      <p>ID: {id}</p>
    </div>
  );
};

export default Blog;
