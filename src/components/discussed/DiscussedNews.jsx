import React from 'react';
import { Link } from 'react-router-dom';


const DiscussedNews = ({discussion}) => {
  const {id, sort, headline} = discussion;
  return (
    <div className="news">
      <Link to={`news/discussed/${id}`}>
    <h2>{sort}</h2>
    <h3 className='headline'>{headline}</h3>
  </Link>
    </div>
  );
};

export default DiscussedNews;