import React, { useState, useEffect } from 'react';
import { fetchMarsRoverImages } from '../services/curiosityAPI';

interface Camera {
    id: number;
    full_name: string;
}

interface Rover {
    id: number;
    name: string;
    status: string;
    total_photos: number;
    landing_date: string;
    launch_date: string;
}

interface Photo {
    id: number;
    img_src: string;
    camera: Camera;
    earth_date: string;
    rover: Rover;
}

const Curiosity: React.FC = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        loadMarsRoverImages();
    }, [page]);

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
                <h2>Curiosity</h2>
                <ul>
                    <li>Rover name: Curiosity</li>
                    <li>Status: active</li>
                    <li>Camera: Front Hazard Avoidance Camera</li>
                    <li>Launch date: 2011-11-26</li>
                    <li>Landing date: 2012-08-06</li>
                    <li>Total photos: 671523</li>
                </ul>
                {photos.map(photo => (
                    <div key={photo.id} className="col-md-4 mb-4">
                        <a href={photo.img_src} target="_blank" rel="noopener noreferrer">
                            <img
                                src={photo.img_src}
                                alt={`Mars Rover ${photo.id}`}
                                className="img-thumbnail mb-3 img-fluid"
                            />
                            <p>Date image: {photo.earth_date}</p>
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

export default Curiosity;
