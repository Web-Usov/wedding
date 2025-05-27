export interface WeddingEvent {
  time: string;
  event: string;
  description?: string;
}

export interface WeddingCouple {
  title: string;
  description: string;
}

export interface WeddingLocation {
  name: string;
  address: string;
  description: string;
  image: string;
  mapUrl: string;
}

export interface DressCode {
  enabled: boolean;
  description?: string;
  colors: {
    name: string;
    hex: string;
  }[];
}

export interface WeddingData {
  enabled?: boolean;
  couple: WeddingCouple;
  date: string;
  location: WeddingLocation;
  program: WeddingEvent[];
  gallery: string[];
  dressCode?: DressCode;
}
