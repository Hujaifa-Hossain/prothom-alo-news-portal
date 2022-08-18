import React from 'react';
import { Link } from 'react-router-dom';

const MostreadNews = ({most}) => {
  const {id, sort, headline} = most;
  return (
    <div className='news'>
      <Link to={`news/mostread/${id}`}>
    <h2>{sort}</h2>
    <h3 className='headline'>{headline}</h3>
  </Link>
    </div>
  );
};

export default MostreadNews;