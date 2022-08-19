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
    <main className='contained'>

      <div className="tabs">

        <TabHead index={index} setIndex={setIndex} />

        <div className="tab-container">
        <div hidden={index !== 0}>
          {news && news[0]?.latest?.items.map(latest => <LatestNews key={latest.id} latest={latest}></LatestNews>)}
        </div>

        <div hidden={index !== 1}>
          {news && news[0]?.mostread?.items.map(most => <MostreadNews key={most.id} most={most}></MostreadNews>)}
        </div>

        <div hidden={index !== 2}>
          {news && news[0]?.discussed?.items.map(discussion => <DiscussedNews key={discussion.id} discussion={discussion}></DiscussedNews>)}
        </div>
        </div>
        
      </div>

      <div className='select-1 '>
        
        <p className="circle"></p> <span>নির্বাচিত</span>

        <div className="news-box">
        {news && news[0]?.selected?.items.slice(0, 3).map(select => <SelectedNews key={select.id} select={select}></SelectedNews>)}
        </div>
      </div>

      <div className='select'>
        {news && news[0]?.selected?.items.slice(3, 6).map(select => <SelectedNews key={select.id} select={select}></SelectedNews>)}
      </div>

    </main>
  );
};

export default Home;