import React from 'react';
import { Link } from 'react-router-dom';

const SelectedNews = ({select}) => {
  const {id, sort, headline, thumb} = select;
  return (
    <div>
      <Link to={`news/selected/${id}`}>
    <h2>{sort}</h2>
    <h2>{headline}</h2>
    <img src={thumb} alt="" />
  </Link>
    </div>
  );
};

export default SelectedNews;