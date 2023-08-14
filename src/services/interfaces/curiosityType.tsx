export interface Camera {
    id: number;
    full_name: string;
}

export interface Rover {
    id: number;
    name: string;
    status: string;
    total_photos: number;
    landing_date: string;
    launch_date: string;
}

export interface Photo {
    id: number;
    img_src: string;
    camera: Camera;
    earth_date: string;
    rover: Rover;
}