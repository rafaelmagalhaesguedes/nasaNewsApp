// typing values
export interface APODData {
    title: string;
    date: string;
    description: string;
    imageUrl: string;
}

// Token Key
const apiKey = `BfjznSZpe8iyba9VVhi1OHpRtih2HiLj6kWjMvOo`;

// API APOD
export const fetchAPODData = async () => {
    const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
    );
    if (!response.ok) {
        throw new Error('Failed to fetch APOD data');
    }
    const data = await response.json();
    return {
        title: data.title,
        date: data.date,
        description: data.explanation,
        imageUrl: data.hdurl,
    };
};
