# Instagram Clone (Work in Progress)

This project aims to teach about react, expo, and zustand.

## Description

The project is a mobile application created with React Native that mimics the functionalities and design of the Instagram app. It includes features such as browsing through stories, viewing images, and displaying user profiles.

## Technologies Used

- React Native
- Expo

## Installation

1. Clone the repository
2. Install dependencies: `yarn` 
3. Run the app: `yarn expo`

## Versions

1. Node: `v20.10.0`
2. NPM: `10.2.5`
3. Expo: `~49.0.15`

## Serverless


navigate to ./server and run
```bash
npx sls offline
```

## Sprint Features & Bugs

==========================
HD-01: Toggling playback on a video causes another to toggle it's playback

Description: A bug was discovered that when Users login and toggles a videos playback, the other visible video gets toggled
    Given:
        User clicks a video (pause or play)
    Acceptance Criteria:
        The video the user clicks on is the only one that gets toggled

```
change
  togglePlayback: (id: string) =>
    set((state) => ({
      videos: state.videos?.map((video) => ({
        ...video,
        isPlaying: !video.isPlaying,
      })),
    })),

to this
  togglePlayback: (id: string) =>
    set((state) => ({
      videos: state.videos?.map((video) => ({
        ...video,
        isPlaying: video.id === id ? !video.isPlaying : video.isPlaying,
      })),
    })),
```

==========================
HD-02: User Profile Pictures are not displaying as of R2024.07

Description: Last nights production release of the API gateway has caused profile pictures to not display. Data
is coming back from the api gateway but the app is no longer showing User photos.
    Given:
        User logs in
    Acceptance Criteria:
        The upper profile pictures must display

change the photoUri to photoUrl. Must've been a backend change coming downstream

```
  const users: User[] = usersJson.users.map((user: any) => ({
    id: user.id,
    name: user.name,
    photoURi: user.photoURi,
```

==========================
HD-03: Stuff and stuff

Description: Last nights production release of the API gateway has caused profile pictures to not display. Data
is coming back from the api gateway but the app is no longer showing User photos.
    Given:
        All profile pictures are not showing up.
    Acceptance Criteria:
        The video the user clicks on is the only one that gets toggled



## Troubleshooting
If images and videos are not loading, but the user profile names are loading. Then this is a proxy issue with iOS simulator. Make sure to Trust any local Certificates or to add trusted certificates to the new iPhone simulator

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:
1. Fork the repository
2. Create your branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request
