import React, { useState, useEffect } from 'react';
import { AlbumData } from '../services/interfaces/apolloType';
import '../assets/css/apollo.css';

const Apollo: React.FC = () => {
  const [albumData, setAlbumData] = useState<AlbumData | null>(null);

  useEffect(() => {
    async function fetchAlbumData() {
      try {
        const response = await fetch('https://images-api.nasa.gov/search?q=apollo');
        const data = await response.json();
        setAlbumData(data);
      } catch (error) {
        console.error('Error fetching album data:', error);
      }
    }

    fetchAlbumData();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="header-apollo">
          <h2 className="title-apollo"> Mission Apollo 11</h2>
        </div>
        <div className="news-apollo">
          <h3 className="news-mission">Apollo 11 News</h3>
          <hr />
        </div>
        <div className="row">
          {albumData?.collection.items.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="thumbnail">
                {item.links?.map((link, linkIndex) => (
                  link.rel === 'preview' && link.render === 'image' && (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className="d-block link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="image-container">
                        <img className="img-thumbnail" src={link.href} alt={`Image ${index}`} />
                        <div className="title-thumb">{item.data[0].title}</div>
                      </div>
                    </a>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apollo;
