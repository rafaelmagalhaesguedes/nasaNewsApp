import React, { useState, useEffect } from 'react';
import { fetchCuriosityImages } from '../services/curiosityAPI';
import { Photo } from '../services/interfaces/curiosityType';
import '../assets/css/curiosity.css';

const Curiosity: React.FC = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        loadCuriosityRoverImages();
    }, [page]);

    const loadCuriosityRoverImages = async () => {
        const newPhotos = await fetchCuriosityImages(page);
        setPhotos(prevPhotos => [...prevPhotos, ...newPhotos]);
    };

    const loadMoreImages = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <div className="container mx-auto">
            <div className="row">
                <div className="box">
                    <h2 className="title-rover">Curiosity</h2>
                    <ul className="list-rover">
                        <li className="link-rover"><strong>Rover name:</strong> Curiosity</li>
                        <li className="link-rover"><strong>Status:</strong> active</li>
                        <li className="link-rover"><strong>Camera:</strong> Front Hazard Avoidance Camera</li>
                        <li className="link-rover"><strong>Launch date:</strong> 2011-11-26</li>
                        <li className="link-rover"><strong>Landing date:</strong> 2012-08-06</li>
                        <li className="link-rover"><strong>Total photos:</strong> 671523</li>
                    </ul>
                </div>
                <div className="new-images my-3">
                    <h3>New Images</h3>
                </div>
                {photos.map(photo => (
                    <div key={photo.id} className="col-md-4 mb-4">
                        <a href={photo.img_src} target="_blank" rel="noopener noreferrer">
                            <img
                                src={photo.img_src}
                                alt={`Mars Rover ${photo.id}`}
                                className="img-thumbnail mb-1 img-fluid"
                            />
                        </a>
                        <p className="date-image">Date image: {photo.earth_date}</p>
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
