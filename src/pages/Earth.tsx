import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../assets/css/earth.css';

interface ImageData {
  image: string;
}

const Earth: React.FC = () => {
  const [imageData, setImageData] = useState<ImageData[]>([]);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    async function fetchImages() {
      try {
        if (!selectedDate) return; // No need to fetch if no date selected
        
        const [year, month, day] = selectedDate.split('-');
        const metadataUrl = `https://epic.gsfc.nasa.gov/api/natural/date/${year}-${month}-${day}`;
        
        const metadataResponse = await fetch(metadataUrl);
        const metadata: ImageData[] = await metadataResponse.json();
        
        setImageData(metadata);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }

    fetchImages();
  }, [selectedDate]);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Earth Images</h1>
      <form className="mb-4">
        <div className="mb-3">
          <label htmlFor="datePicker" className="form-label">
            Select a date:
          </label>
          <input
            type="date"
            id="datePicker"
            className="form-control"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
      </form>
      <Carousel>
        {imageData.map((image, index) => (
          <div key={index}>
            <img
              src={`https://epic.gsfc.nasa.gov/archive/natural/${selectedDate.replace(/-/g, '/')}/png/${image.image}.png`}
              alt={`Image ${index + 1}`}
              className="img-fluid"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Earth;
