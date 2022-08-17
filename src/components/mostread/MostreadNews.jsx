import React from 'react';
import { Link } from 'react-router-dom';

const MostreadNews = ({most}) => {
  const {id, sort, headline} = most;
  return (
    <div>
      <Link to={`news/mostread/${id}`}>
    <h2>{sort}</h2>
    <h2>{headline}</h2>
  </Link>
    </div>
  );
};

export default MostreadNews;