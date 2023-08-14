// api.ts
interface Photo {
    img_src: string;
}

interface MarsData {
    photos: Photo[];
}

const apiKey = import.meta.env.VITE_TOKEN;

export async function fetchMarsRoverImages(page: number): Promise<Photo[]> {
    const apiUrlMarsRover = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-6-3&api_key=${apiKey}&page=${page}`;

    try {
        const response = await fetch(apiUrlMarsRover);
        const data: MarsData = await response.json();
        console.log(data);
        
        if (data.photos && data.photos.length > 0) {
            return data.photos;
        }
        return [];
    } catch (error) {
        console.error('Error loading Mars Rover data:', error);
        return [];
    }
}
