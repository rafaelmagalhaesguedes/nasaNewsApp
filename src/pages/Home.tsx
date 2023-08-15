// Home.tsx
import React, { useEffect, useState } from 'react';
import { APODData, fetchAPODData } from '../services/apis/apodAPI';
import '../assets/css/home.css';

const Home: React.FC = () => {
    const [apodData, setAPODData] = useState<APODData | null>(null);

    useEffect(() => {
        fetchAPOD();
    }, []);

    const fetchAPOD = async () => {
        try {
            const data = await fetchAPODData();
            setAPODData(data);
        } catch (error) {
            console.error('Error fetching APOD data:', error);
        }
    };

    return (
        <section>
            {apodData ? (
                <div className="content">
                    <h1 id="title" className="title">Astronomy Picture of the Day</h1>
                    <h2 id="title-data" className="sub-title">
                        {apodData.title}
                    </h2>
                    <span id="date" className="date">
                        {apodData.date}
                    </span>
                    <p id="desc" className="descricao">{apodData.description}</p>
                    <a href={apodData.imageUrl} >
                    <img
                        id="image"
                        src={apodData.imageUrl}
                        alt="Astronomy Picture of the Day"
                        className="imagem"
                    />
                    </a>
                </div>
            ) : (
                <p className="loading">Loading...</p>
            )}
        </section>
    );
};

export default Home;
