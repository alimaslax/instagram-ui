export interface User {
  id: number;
  photoURL: string;
  name: string;
  viewed: boolean;
  main: boolean;
}

export interface Post {
  id: string;
  profileURL: string;
  postURL: string;
  name: string;
  comment: string;
  likes: string;
  date: string;
  liked: boolean;
}


export interface ResultItem {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title?: string;
  original_language: string;
  original_title?: string;
  overview: string;
  poster_path: string;
  media_type: MediaType;
  genre_ids: number[];
  popularity: number;
  release_date?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  name?: string;
  original_name?: string;
  first_air_date?: string;
  origin_country?: string[];
}

export enum MediaType {
  Movie = 'movie',
  Tv = 'tv',
}
