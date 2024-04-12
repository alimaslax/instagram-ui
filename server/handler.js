"use strict";
const fs = require("fs");

// function to toggle the "liked" button for a post
// Function to read posts data from file
const loadPostsFromFile = async () => {
  try {
    const data = fs.readFileSync("posts.json");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error loading posts data:", error);
    return [];
  }
};

const loadUsersFromFile = async () => {
  try {
    const data = fs.readFileSync("users.json");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error loading posts data:", error);
    return [];
  }
};


// Function to save posts data to a file
const savePostsToFile = async (postsData) => {
  try {
    fs.writeFileSync("posts.json", JSON.stringify(postsData));
    console.log("Posts data saved successfully.");
  } catch (error) {
    console.error("Error saving posts data:", error);
  }
};

module.exports.like = async (event) => {
  const requestBody = JSON.parse(event.body); // Parse the request body to extract the post ID and liked status
  const { id, liked } = requestBody; // Destructure the post ID and liked status from the request body

  // Load posts data from file
  let postsData = await loadPostsFromFile();

  // Find the post with the given ID
  const postIndex = postsData.findIndex((post) => post.id === id);
  if (postIndex === -1) {
    return {
      statusCode: 404,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        message: `Post with ID ${id} not found`,
      }),
    };
  }

  // Update the liked status of the post
  postsData[postIndex].liked = liked;

  // Save the updated posts data to file
  await savePostsToFile(postsData);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      message: `Post with ID ${id} liked status updated successfully`,
    }),
  };
};

// icons
const plusIcon = "https://picsum.photos/id/555/200/300.jpg";

module.exports.users = async (event) => {
    // Load users data from file
    let usersData = await loadUsersFromFile();
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
    },
    body: JSON.stringify({
      users: usersData,
      plusIcon,
    }),
  };
};

module.exports.posts = async (event) => {
  // Load posts data from file
  let postsData = await loadPostsFromFile();

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
    },
    body: JSON.stringify({
      posts: postsData,
    }),
  };
};
