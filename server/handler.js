"use strict";

// icons
const plusIcon = "https://picsum.photos/id/555/200/300.jpg";
// user data
const USERS_DATA = [
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: "https://picsum.photos/id/870/200/300.jpg",
    name: "Your story",
    viewed: true,
    main: true,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: "https://picsum.photos/id/871/200/300.jpg",
    name: "_sara_arruda_",
    viewed: false,
    main: false,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: "https://picsum.photos/id/872/200/300.jpg",
    name: "priv_design",
    viewed: false,
    main: false,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: "https://picsum.photos/id/873/200/300.jpg",
    name: "ds.pino",
    viewed: false,
    main: false,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: "https://picsum.photos/id/874/200/300.jpg",
    name: "denise_12",
    viewed: false,
    main: false,
  },
];

// posts data
const POSTS_DATA = [
  {
    id: "1",
    profileURL: "https://picsum.photos/id/870/200/300.jpg",
    postURL: "https://storage.googleapis.com/lewenberg/nonstop.mp4",
    name: "uluketa",
    comment: "Sky",
    likes: "2.223",
    date: "December 28, 2023",
    liked: true,
  },
  {
    id: "2",
    profileURL: "https://picsum.photos/id/870/200/300.jpg",
    postURL: "https://storage.googleapis.com/lewenberg/flying.mp4",
    name: "_sara_arruda_",
    comment: "Home",
    likes: "1.153",
    date: "January 02, 2024",
    liked: false,
  },
  {
    id: "3",
    profileURL: "https://picsum.photos/id/870/200/300.jpg",
    postURL: "https://storage.googleapis.com/lewenberg/block.mp4",
    name: "_sara_arruda_",
    comment: "Home",
    likes: "1.153",
    date: "January 02, 2024",
    liked: true,
  },
];

module.exports.users = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
    },
    body: JSON.stringify({
      users: USERS_DATA,
      plusIcon,
    }),
  };
};

module.exports.posts = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
    },
    body: JSON.stringify({
      posts: POSTS_DATA,
    }),
  };
};
