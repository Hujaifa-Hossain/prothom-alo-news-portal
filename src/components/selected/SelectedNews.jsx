import React from 'react';
import { Link } from 'react-router-dom';

const SelectedNews = ({ select }) => {
  const { id, sort, headline, thumb } = select;
  return (
    <div className="news">
      <Link className='link' to={`news/selected/${id}`}>
        <div className='image'>
          <img src={thumb} alt={headline} />
        </div>
        
        <div className="text">
          <h2><span className='span-text'>{sort} /</span> {headline}</h2>
        </div>
      </Link>
    </div>
  );
};

export default SelectedNews;