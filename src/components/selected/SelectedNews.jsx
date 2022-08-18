import React from 'react';
import { Link } from 'react-router-dom';

const SelectedNews = ({ select }) => {
  const { id, sort, headline, thumb } = select;
  return (
    <div>
      <Link className='select-2' to={`news/selected/${id}`}>
        <div className="text">
          <h2>{sort}</h2>
          <h2>{headline}</h2>
        </div>
       <div className='image'>
       <img src={thumb} alt="" />
       </div>
      </Link>
    </div>
  );
};

export default SelectedNews;