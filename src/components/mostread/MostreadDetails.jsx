import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MostreadDetails = () => {
  let { mostreadId } = useParams();

  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/sample.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const most = (details[0]?.mostread?.items?.find(ele => ele.id.toString() === mostreadId.toString()))

  return (
    <div className='details'>
      <h2>{most?.headline} </h2>

      {<img src={most?.["cover-photo"]}></img>}
      <p>{most?.descriptions.replace(/(<([^>]+)>)/ig, ' ')}</p>
    </div>
  );
};

export default MostreadDetails;