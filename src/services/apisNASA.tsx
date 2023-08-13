// api.ts
export interface APODData {
    title: string;
    date: string;
    description: string;
    imageUrl: string;
}

export const fetchAPODData = async () => {
    try {
        const response = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=BfjznSZpe8iyba9VVhi1OHpRtih2HiLj6kWjMvOo`
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
    } catch (error) {
        throw new Error('Error fetching APOD data');
    }
};
