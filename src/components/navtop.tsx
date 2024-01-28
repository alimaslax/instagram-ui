import React from 'react';
import { View, Image } from 'react-native';
import { 
  LogoIcon, 
  MessageIcon, 
  StrokeIcon
} from "../includes/images";

import { styles } from '../screens/home/styles';

export function NavTop() {
  return (
    <View style={[styles.header]}>
      <LogoIcon />
      <View style={styles.headerOptions}>
        <StrokeIcon />
        <MessageIcon />
      </View>
    </View>
  );
}
