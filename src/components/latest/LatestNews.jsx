import React from 'react';
import { Link } from 'react-router-dom';

const LatestNews = ({ latest }) => {

  const { id, sort, headline } = latest;

  return (
    <div className='news'>
      <p>{sort}</p>
      <Link to={`news/latest/${id}`}>
        <h3 className='headline'>{headline}</h3>
      </Link>
    </div>
  );
};

export default LatestNews;