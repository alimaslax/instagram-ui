import React, { useState } from "react";
import { View, Text, Image, Dimensions, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { NavBottom } from "../../components/navbottom";
import { NavTop } from "../../components/navtop";
import { Stories } from "./components/stories";

import { POSTS_DATA } from "./data/posts";
import {
  HeartIcon,
  RedHeartIcon,
  CommentIcon,
  ShareIcon,
  BookmarkIcon,
  PointsIcon
} from "../../includes/images";

export function Home() {
  const screenWidth = Dimensions.get('window').width;
  const [posts, setPosts] = useState(POSTS_DATA);

  const handleToggleLike = (postId: string) => {
    setPosts((prevPosts) => {
      return prevPosts.map((post) => {
        if (post.id === postId) {
          post.liked = !post.liked;
        }
        return post;
      });
    });
  };

  return (
    <View style={styles.container}>
      <NavTop />
      <FlatList
        data={['header', ...POSTS_DATA]}
        keyExtractor={(item) => (typeof item === 'object' ? item.id.toString() : 'header')}
        renderItem={({ item }) => (
          typeof item === 'object' ? (
            <View style={styles.contentItem}>
              <View style={styles.contentItemHeader}>
                <View style={styles.contentItemHeaderLeft}>
                  <Image source={item.profileURL} style={{ borderRadius: 50, ...styles.contentItemHeaderImg }} />
                  <Text style={styles.contentItemHeaderTxt}>{item.name}</Text>
                </View>
                <PointsIcon style={{ transform: [{ rotate: '90deg' }] }} />
              </View>

              <Image source={item.postURL} style={{ width: screenWidth, height: screenWidth }} />

              <View style={styles.contentItemFooter}>
                <View style={styles.contentItemFooterLeft}>
                  <TouchableOpacity key={item.id} onPress={() => handleToggleLike(item.id)}>
                    {item.liked ? (
                      <RedHeartIcon />
                    ) : (
                      <HeartIcon />
                    )}
                  </TouchableOpacity>
                  <CommentIcon />
                  <ShareIcon />
                </View>
                <BookmarkIcon />
              </View>

              <View style={styles.infoPost}>
                <Text style={{ fontWeight: '600', ...styles.contentItemFooterTxt }}>{item.likes} likes</Text>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <Text style={{ fontWeight: '600', ...styles.contentItemFooterTxt }}>{item.name} </Text>
                  <Text style={styles.contentItemFooterTxt}>{item.comment}</Text>
                </View>
                <Text style={{ color: '#aaaaaa', fontSize: 11 }}>{item.date}</Text>
              </View>
            </View>
          ) : (
            <Stories />
          )
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<View />}
        stickyHeaderIndices={[0]}
      />

      <View style={{ marginBottom: 50 }} />
      <NavBottom />
    </View>
  );
}