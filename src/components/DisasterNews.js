// src/components/DisasterNews.js
import React, { useState, useEffect } from "react";

const DisasterNews = () => {
  const [news, setNews] = useState([]); // State to store news items

  useEffect(() => {
    // Fetch news from the backend on component mount
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/news/latest");
        const data = await response.json();
        // Assuming the backend sends JSON; adjust if it sends XML
        //console.log(data.rss.channel[0].item);
        setNews(data.rss.channel[0]); // Update state with news items
        console.log(news);
      } catch (error) {
        console.error("Error fetching disaster news:", error);
      }
    };

    fetchNews();
  }, []); // Empty dependency array means this effect runs once on mount

  if (!news || !news.item) {
    // Render a loading state or placeholder
    return <div>Loading news...</div>;
  }

  return (
    <div>
      {news && (
        <div className="grid">
          {news.item.map((newsItem, index) => (
            <div key={newsItem["gdacs:eventid"][0]} className="grid-item">
              <div className="title">
                <h3>{newsItem["gdacs:country"][0]}</h3>
                <img className="icon" src={newsItem["gdacs:icon"][0]} />
              </div>
              <p>{newsItem.description[0]}</p>
              <p>{newsItem["gdacs:population"][0]["_"]}</p>
              <p>{newsItem["gdacs:severity"][0]["_"]}</p>
              <strong>
                Alert level: {newsItem["gdacs:alertlevel"][0]}-
                {newsItem["gdacs:alertscore"][0]}
              </strong>
              <a
                href={newsItem.link[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="cta"
              >
                See more
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisasterNews;
