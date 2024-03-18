import { Post, User } from "../interfaces/apiResult";

export const getPostDetails = async (): Promise<Post[]> => {
  const repsonse = await fetch(`http://localhost:3000/dev/posts`);
  return repsonse.json();
};

export const getUserDetails = async (): Promise<User[]> => {
  const response = await fetch(`http://localhost:3000/dev/users`);
  const usersJson = await response.json();
  const users: User[] = usersJson.users.map((user: any) => ({
    id: user.id,
    name: user.name,
    photoURi: user.photoURL,
    main: user.main,
    viewed: user.viewed
  }));
  console.log(users);
  return users;
};
