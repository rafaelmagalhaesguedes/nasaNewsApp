// types.ts
export interface MediaLink {
    href: string;
    rel: string;
    render: string;
  }
  
  export interface MediaItem {
    data: {
      album: string[];
      title: string;
      description: string;
    }[];
    links: MediaLink[];
  }
  
  export interface AlbumData {
    collection: {
      items: MediaItem[];
    };
  }
  