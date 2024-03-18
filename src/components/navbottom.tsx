import React from "react";
import { View, Image } from "react-native";
import {
  HouseIcon,
  SearchIcon,
  newPostIcon,
  UnionIcon,
} from "../includes/images";

import { styles } from "../screens/home/styles";
import { useQuery } from "@tanstack/react-query";
import { getUserDetails } from "../services/api";

export function NavBottom() {
  const userQuery = useQuery({
    queryKey: ["users"],
    queryFn: getUserDetails,
  });

  return (
    <View style={styles.footer}>
      <HouseIcon />
      <SearchIcon />
      <Image source={newPostIcon} style={{ width: 25, height: 25 }} />
      <UnionIcon />
      {userQuery.isSuccess ? (
        <Image
          source={{ uri: userQuery?.data[0].photoURi }}
          style={{ width: 27, height: 27, borderRadius: 50 }}
        />
      ) : (
        <></>
      )}
    </View>
  );
}
