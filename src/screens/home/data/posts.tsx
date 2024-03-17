import { mainUser, user1, post1, post2 } from "../../../includes/images";
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

export const POSTS_DATA: Post[] = [
    {
        id: "1",
        profileURL: mainUser,
        postURL: "https://storage.googleapis.com/lewenberg/nonstop.mp4",
        name: "uluketa",
        comment: 'Sky',
        likes: '2.223',
        date: 'December 28, 2023',
        liked: true,
    },
    {
        id: "2",
        profileURL: user1,
        postURL: 'https://storage.googleapis.com/lewenberg/flying.mp4',
        name: "_sara_arruda_",
        comment: 'Home',
        likes: '1.153',
        date: 'January 02, 2024',
        liked: false,
    },
];