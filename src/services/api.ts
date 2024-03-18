import { Post, User } from "../interfaces/apiResult";

export const getPostDetails = async (): Promise<Post[]> => {
  const repsonse = await fetch(`http://localhost:3000/dev/posts`);
  return repsonse.json();
};

export const getUserDetails = async (): Promise<User[]> => {
  const repsonse = await fetch(`http://localhost:3000/dev/users`);
  return repsonse.json();
};
