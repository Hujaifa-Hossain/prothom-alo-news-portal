import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DiscussedDetails = () => {
  let { discussedId } = useParams();

  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/sample.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);


  const discussion = (details[0]?.discussed?.items?.find(ele => ele.id.toString() === discussedId.toString()))


  console.log(discussion)
  return (
    <div>
      <h2>{discussion?.headline} </h2>
        
        {<img src={discussion?.["cover-photo"]}></img>}
        <p>{discussion?.descriptions.replace(/(<([^>]+)>)/ig, ' ')}</p>
    </div>
  );
};

export default DiscussedDetails;