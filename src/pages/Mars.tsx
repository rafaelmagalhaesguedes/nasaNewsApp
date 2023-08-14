import React, { useState, useEffect } from 'react';

interface Photo {
    img_src: string;
}

const apiKey = 'BfjznSZpe8iyba9VVhi1OHpRtih2HiLj6kWjMvOo';
const apiUrlMarsRover = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-6-3&api_key=${apiKey}`;

const Mars: React.FC = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        loadMarsRoverImages();
    }, []);

    const loadMarsRoverImages = () => {
        fetch(`${apiUrlMarsRover}&page=${page}`)
            .then(response => response.json())
            .then(data => {
                if (data.photos && data.photos.length > 0) {
                    setPhotos(prevPhotos => [...prevPhotos, ...data.photos]);
                }
            })
            .catch(error => {
                console.error('Error loading Mars Rover data:', error);
            });
    };

    const loadMoreImages = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <div className="container mx-auto m-4">
            <div className="row">
                {photos.map((photo, index) => (
                    <div key={index} className="col-md-4">
                        <a href={photo.img_src}>
                            <img
                                src={photo.img_src}
                                alt={`Mars Rover ${index}`}
                                className="img-thumbnail mb-3 img-fluid"
                            />
                        </a>
                    </div>
                ))}
            </div>
            <div className="text-center">
                <button className="btn btn-dark" onClick={loadMoreImages}>Load More</button>
            </div>
        </div>
    );
};

export default Mars;
