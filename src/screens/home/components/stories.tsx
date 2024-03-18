import React from "react";
import { Text, View, FlatList, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "../styles";
import { useQuery } from "@tanstack/react-query";
import { getUserDetails } from "../../../services/api";

export function Stories() {
  const userQuery = useQuery({
    queryKey: ["users"],
    queryFn: getUserDetails,
  });

  return (
    <View style={styles.stories}>
      <FlatList
        horizontal={true}
        data={["header", ...(userQuery?.data?.users ?? [])]}
        keyExtractor={(item, index) =>
          typeof item === "object" ? item.id : `header_${index}`
        }
        renderItem={({ item }) => (
          <View style={styles.story}>
            <LinearGradient
              colors={
                item.viewed
                  ? ["#3a3a3a", "#3a3a3a"]
                  : ["#FFD600", "#FF7A00", "#FF0069", "#D300C5", "#7638FA"]
              }
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                borderWidth: 1.5,
                borderRadius: 50,
                padding: item.viewed ? 1.5 : 2,
              }}
            >
              <Image
                style={styles.storiesCardImage}
                source={{ uri: item.photoURL }}
              />
            </LinearGradient>

            {item.main && (
              <View style={styles.storiesCardMain}>
                <Image
                  style={styles.storiesCardMainPlus}
                  source={{ uri: userQuery?.data?.plusIcon }}
                />
              </View>
            )}

            <Text style={styles.storiesCardText}>{item.name}</Text>
          </View>
        )}
      />
      <View style={styles.viewHr} />
    </View>
  );
}
