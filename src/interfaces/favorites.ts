import { MediaType } from './apiResult';

export type Favorite = {
  id: string;
  mediaType: MediaType;
  name: string;
  thumbnail: string;
};
