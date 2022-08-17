import React from 'react';
import { Link } from 'react-router-dom';


const DiscussedNews = ({discussion}) => {
  const {id, sort, headline} = discussion;
  return (
    <Link to={`news/discussed/${id}`}>
    <h2>{sort}</h2>
    <h2>{headline}</h2>
  </Link>
  );
};

export default DiscussedNews;