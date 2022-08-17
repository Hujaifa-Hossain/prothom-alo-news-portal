import React from 'react';
import { Link } from 'react-router-dom';

const LatestNews = ({latest}) => {

  const {id, sort, headline} = latest;
  
  return (
    <div>
      <Link to={`news/latest/${id}`}>
    <h2>{sort}</h2>
    <h2>{headline}</h2>
  </Link>
    </div>
  );
};

export default LatestNews;