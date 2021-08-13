import React, { useState, useEffect } from 'react';
import 'bootstrap';

import ArticlesList from 'components/ArticlesList';

function App() {
  const URL = 'http://localhost:1337/articles'
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const [listArticles, setListArticles] = React.useState([])
  const [mounted, setMounted] = React.useState(true)

  const dataArticles = async () => {
    fetch(URL, options)
      .then(res => res.json())
      .then(data => {
        setListArticles(data)
      })
  }

  const allArticles = () => {
    return <ArticlesList listArticles={listArticles} />
  }

  useEffect(
    () => {
      if (!mounted) return null
      dataArticles();
      console.log('listArticles => ', listArticles)
      return () => setMounted(false)
    }, [listArticles]
  )

  return (
    <div className="App">
      <div className="container my-4">
        <article id="article">
          <h1>Blog</h1>
          {<ArticlesList listArticles={listArticles} />}
        </article>
      </div>
    </div>
  );
}

export default App;
