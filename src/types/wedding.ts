export interface WeddingEvent {
  time: string;
  event: string;
  description?: string;
}

export interface WeddingCouple {
  bride: string;
  groom: string;
  description: string;
}

export interface WeddingData {
  couple: WeddingCouple;
  date: string;
  location: string;
  program: WeddingEvent[];
}
