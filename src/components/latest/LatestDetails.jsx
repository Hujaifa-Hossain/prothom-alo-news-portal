import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const LatestDetails = () => {
  let { latestId } = useParams();

  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/sample.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);


  const latest = (details[0]?.latest?.items?.find(ele => ele.id.toString() === latestId.toString()))

  return (
    <div>
      <h2>{latest?.headline} </h2>

      {<img src={latest?.["cover-photo"]}></img>}
      <p>{latest?.descriptions.replace(/(<([^>]+)>)/ig, ' ')}</p>
    </div>
  );
};

export default LatestDetails;