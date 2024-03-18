export interface User {
  id: number;
  photoURi: string;
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