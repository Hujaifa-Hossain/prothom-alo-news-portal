import React, { useEffect, useState } from 'react';
import LatestNews from '../components/latest/LatestNews';
import DiscussedNews from '../components/discussed/DiscussedNews';
import MostreadNews from '../components/mostread/MostreadNews';
import SelectedNews from '../components/selected/SelectedNews';

const Home = () => {
  const [news, setNews] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch('/sample.json')
      .then(res => res.json())
      .then(data => setNews(data))
  }, [])

  return (
    <div>

      <div className="tabs">
        <div className="tab-list">
          <span className="tab-head" onClick={() => setIndex(0)}>
            সর্বশেষ
          </span>
          <span className="tab-head" onClick={() => setIndex(1)}>
            পঠিত
          </span>
          <span className="tab-head" onClick={() => setIndex(2)}>
            আলোচিত
          </span>

        </div>
        <div className="tab-content" hidden={index != 0}>
          <div className=''>
            {news && news[0]?.latest?.items.map(latest => <LatestNews key={latest.id} latest={latest}></LatestNews>)}
          </div>
        </div>
        <div className="tab-content" hidden={index != 1}>
          <div className=''>
            {news && news[0]?.mostread?.items.map(most => <MostreadNews key={most.id} most={most}></MostreadNews>)}
          </div>
        </div>
        <div className="tab-content" hidden={index != 2}>
          <div className=''>
            {news && news[0]?.discussed?.items.map(discussion => <DiscussedNews key={discussion.id} discussion={discussion}></DiscussedNews>)}
          </div>
        </div>
      </div>

      {/* 
      <div className='' style={{ 'margin': '50px' }}>
        {news && news[0]?.discussed?.items.map(discussion => <DiscussedNews key={discussion.id} discussion={discussion}></DiscussedNews>)}
      </div>

      <div className='' style={{ 'margin': '50px' }}>
        {news && news[0]?.latest?.items.map(latest => <LatestNews key={latest.id} latest={latest}></LatestNews>)}
      </div>

      <div className='' style={{ 'margin': '50px' }}>
        {news && news[0]?.mostread?.items.map(most => <MostreadNews key={most.id} most={most}></MostreadNews>)}
      </div> */}

      <div className='' style={{ 'margin': '50px' }}>

<span className="selected">নির্বাচিত</span>

        {news && news[0]?.selected?.items.map(select => <SelectedNews key={select.id} select={select}></SelectedNews>)}
      </div>

    </div>
  );
};

export default Home;