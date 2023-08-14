import React, { useState, useEffect } from 'react';
import { fetchMarsRoverImages } from '../services/marsAPI';

interface Photo {
    img_src: string;
}

const Mars: React.FC = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        loadMarsRoverImages();
    }, []);

    const loadMarsRoverImages = async () => {
        const newPhotos = await fetchMarsRoverImages(page);
        setPhotos(prevPhotos => [...prevPhotos, ...newPhotos]);
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
