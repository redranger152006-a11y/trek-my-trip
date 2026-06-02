export interface TravelPackage {
  id: string;
  name: string;
  destination: string;
  price: number;
  description: string;
  longDescription: string;
  highlights: string[];
  inclusions: string[];
  duration: string;
  image: string;
  rating: number;
  reviewsCount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BookingPreference {
  whatsappNumber: string;
  defaultNumber: string;
}
