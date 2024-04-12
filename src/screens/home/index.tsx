import React, { useRef, useState, useCallback, useEffect } from "react";
import { ResizeMode, Video } from "expo-av";
import {
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Animated,
} from "react-native";
import { styles } from "./styles";
import { useStore } from "../../lib/store";
import { NavBottom } from "../../components/navbottom";
import { NavTop } from "../../components/navtop";
import { Stories } from "./components/stories";

import {
  HeartIcon,
  RedHeartIcon,
  CommentIcon,
  ShareIcon,
  BookmarkIcon,
  PointsIcon,
} from "../../includes/images";
import { getPostDetails, updatePostDetails } from "../../services/api";
import { useQuery } from "@tanstack/react-query";
import { Post } from "../../interfaces/apiResult";

export function Home() {
  const screenWidth = Dimensions.get("window").width;
  const startPlayBack = useStore(
    useCallback((state) => state.startPlayBack, [])
  );
  const togglePlayback = useStore(
    useCallback((state) => state.togglePlayback, [])
  );
  const stopPlayBack = useStore(useCallback((state) => state.stopPlayBack, []));
  const setVideoState = useStore(
    useCallback((state) => state.setVideoState, [])
  );
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPostDetails,
  });

  const videos = useStore((state) => state.videos); // Get videos from store
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const opacity = new Animated.Value(0);

  useEffect(() => {
    if (postQuery.isSuccess) {
      // Extract posts from the query result
      const posts = postQuery.data.posts;

      // Map through the posts and update the video state
      const videoStates = posts.map((post) => ({
        id: post.id,
        isPlaying: false, // Assuming all videos start playing initially
      }));

      // Update the video state with the new values
      setVideoState(videoStates);
    }
  }, [postQuery.isSuccess, postQuery.data, setVideoState]);

  const handleStartPlayback = (postId: string) => {
    startPlayBack(postId);
  };

  const handleStopPlayback = (postId: string) => {
    stopPlayBack(postId);
  };

  const onViewVideo = ({ viewableItems, changed }) => {
    changed.forEach(({ item }) => {
      if (typeof item === "object" && item.id) {
        // Start playback for the visible video
        handleStartPlayback(item.id);
      }
    });
  };

  const onHideVideo = ({ viewableItems, changed }) => {
    changed.forEach(({ item }) => {
      if (typeof item === "object" && item.id) {
        // Start playback for the visible video
        handleStopPlayback(item.id);
      }
    });
  };

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        viewAreaCoveragePercentThreshold: 100,
      },
      onViewableItemsChanged: onViewVideo,
    },
    {
      viewabilityConfig: {
        waitForInteraction: true,
        itemVisiblePercentThreshold: 50,
      },
      onViewableItemsChanged: onHideVideo,
    },
  ]);

  const toggleLikePost = async (post: Post): Promise<void> => {
    const updatedPostData: Post = {
      ...post,
      liked: !post.liked, // Toggle the liked status
    };

    await updatePostDetails(updatedPostData);
    postQuery.refetch();
  };
  return (
    <View style={styles.container}>
      <NavTop />
      {videos ? (
        <FlatList
          data={["header", ...(postQuery?.data?.posts ?? [])]}
          keyExtractor={(item, index) =>
            typeof item === "object" ? item.id : `header_${index}`
          }
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
          renderItem={({ item }) =>
            typeof item === "object" ? (
              <View style={styles.contentItem}>
                <View style={styles.contentItemHeader}>
                  <View style={styles.contentItemHeaderLeft}>
                    <Image
                      source={{ uri: item.profileURL }}
                      style={{
                        borderRadius: 50,
                        ...styles.contentItemHeaderImg,
                      }}
                    />
                    <Text style={styles.contentItemHeaderTxt}>{item.name}</Text>
                  </View>
                  <PointsIcon style={{ transform: [{ rotate: "90deg" }] }} />
                </View>
                <Animated.View
                  style={[
                    styles.backgroundViewWrapper,
                    { opacity },
                    { width: screenWidth, height: screenWidth },
                  ]}
                >
                  {/* Render the Video component */}
                  <Video
                    ref={videoRef}
                    key={currentVideoIndex} // Ensure the component remounts if the key changes
                    isLooping
                    isMuted
                    shouldPlay={
                      videos?.find((video) => video.id === item.id)?.isPlaying
                    } // Check if the video is paused in the state
                    onLoad={() => {
                      Animated.timing(opacity, {
                        toValue: 1,
                        duration: 500,
                        useNativeDriver: true,
                      }).start();
                    }}
                    resizeMode={ResizeMode.COVER}
                    source={{ uri: item.postURL }}
                    style={{ flex: 1 }}
                  />
                  {/* Add TouchableOpacity for tap to pause */}
                  <TouchableOpacity
                    style={styles.overlay}
                    onPress={() => togglePlayback(item.id)}
                  />
                </Animated.View>

                <View style={styles.contentItemFooter}>
                  <View style={styles.contentItemFooterLeft}>
                    <TouchableOpacity
                      key={item.id}
                      onPress={() => toggleLikePost(item)}
                    >
                      {item.liked ? <RedHeartIcon /> : <HeartIcon />}
                    </TouchableOpacity>
                    <CommentIcon />
                    <ShareIcon />
                  </View>
                  <BookmarkIcon />
                </View>

                <View style={styles.infoPost}>
                  <Text
                    style={{
                      fontWeight: "600",
                      ...styles.contentItemFooterTxt,
                    }}
                  >
                    {item.likes} likes
                  </Text>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text
                      style={{
                        fontWeight: "600",
                        ...styles.contentItemFooterTxt,
                      }}
                    >
                      {item.name}{" "}
                    </Text>
                    <Text style={styles.contentItemFooterTxt}>
                      {item.comment}
                    </Text>
                  </View>
                  <Text style={{ color: "#aaaaaa", fontSize: 11 }}>
                    {item.date}
                  </Text>
                </View>
              </View>
            ) : (
              <Stories />
            )
          }
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<View />}
          stickyHeaderIndices={[0]}
        />
      ) : (
        <></>
      )}

      <View style={{ marginBottom: 50 }} />
      <NavBottom />
    </View>
  );
}
