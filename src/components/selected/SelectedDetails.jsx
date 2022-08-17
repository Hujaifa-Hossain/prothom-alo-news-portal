import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SelectedDetails = () => {
  let { selectedId } = useParams();

  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/sample.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);


  const select = (details[0]?.selected?.items?.find(ele => ele.id.toString() === selectedId.toString()))
  return (
    <div>
      <h2>{select?.headline} </h2>

{<img src={select?.["cover-photo"]}></img>}
<p>{select?.descriptions.replace(/(<([^>]+)>)/ig, ' ')}</p>
    </div>
  );
};

export default SelectedDetails;