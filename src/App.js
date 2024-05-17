// src/App.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './components/Blog';
import News from './components/News';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/news/:id" element={<News />} />
          <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;


// steps
// npx create-react-app frontEnd
// define routes in App.js
// create new folder Component
// create react Component to render on a specific endpoint
