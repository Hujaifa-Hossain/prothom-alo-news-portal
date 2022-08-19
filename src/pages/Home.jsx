import React, { useEffect, useState } from 'react';
import LatestNews from '../components/latest/LatestNews';
import MostreadNews from '../components/mostread/MostreadNews';
import DiscussedNews from '../components/discussed/DiscussedNews';
import SelectedNews from '../components/selected/SelectedNews';
import TabHead from '../components/tabs/TabHead';

const Home = () => {
  const [news, setNews] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch('/sample.json')
      .then(res => res.json())
      .then(data => setNews(data))
  }, [])

  return (
    <div className='contained'>

      <div className="tabs">

        <TabHead index={index} setIndex={setIndex} />

        <div className="tab-content" hidden={index !== 0}>
          {news && news[0]?.latest?.items.map(latest => <LatestNews key={latest.id} latest={latest}></LatestNews>)}
        </div>

        <div className="tab-content" hidden={index !== 1}>
          {news && news[0]?.mostread?.items.map(most => <MostreadNews key={most.id} most={most}></MostreadNews>)}
        </div>

        <div className="tab-content" hidden={index !== 2}>
          {news && news[0]?.discussed?.items.map(discussion => <DiscussedNews key={discussion.id} discussion={discussion}></DiscussedNews>)}
        </div>
        
      </div>

      <div className='select-1'>
        <div className="circle"></div>
        <span>নির্বাচিত</span>

        {news && news[0]?.selected?.items.slice(0, 3).map(select => <SelectedNews key={select.id} select={select}></SelectedNews>)}
      </div>

      <div className=''>
        {news && news[0]?.selected?.items.slice(3, 6).map(select => <SelectedNews key={select.id} select={select}></SelectedNews>)}
      </div>

    </div>
  );
};

export default Home;