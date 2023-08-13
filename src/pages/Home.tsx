import React, { useEffect, useState } from 'react';
import '../components/Header.css'

interface APODData {
    title: string;
    date: string;
    description: string;
    imageUrl: string;
}

const Home: React.FC = () => {
    const [apodData, setAPODData] = useState<APODData | null>(null);

    useEffect(() => {
        fetchAPODData();
    }, []);

    const fetchAPODData = async () => {
        try {
            const response = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=BfjznSZpe8iyba9VVhi1OHpRtih2HiLj6kWjMvOo`
            );
            if (!response.ok) {
                throw new Error('Failed to fetch APOD data');
            }
            const data = await response.json();
            setAPODData({
                title: data.title,
                date: data.date,
                description: data.explanation,
                imageUrl: data.hdurl,
            });
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
                    <img
                        id="image"
                        src={apodData.imageUrl}
                        alt="Astronomy Picture of the Day"
                        className="imagem"
                    />
                </div>
            ) : (
                <p className="loading">Loading...</p>
            )}
        </section>
    );
};

export default Home;
