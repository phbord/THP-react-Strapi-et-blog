import React from 'react';
import Showdown from 'showdown';

const ArticlesList = ({listArticles}) => {
  return (
    <ul className="list-group">{
      listArticles.map(article => {
        const converter = new Showdown.Converter()
        const textContent = converter.makeHtml(article.content)
        const createMarkup = (toConv) => {
          return {__html: toConv}
        };
        return (<li key={article.id} className="list-group-item border-0">
          <h2>{article.title}</h2>
          <time>{article.date}</time>
          <div className="description mb-2">{article.description}</div>
          <div className="content mt-3" 
                dangerouslySetInnerHTML={createMarkup(textContent)}/>
        </li>)
      })
    }</ul>
  );
};

export default ArticlesList;