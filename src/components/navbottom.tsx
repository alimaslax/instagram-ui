import React from 'react';
import { View, Image } from 'react-native';
import { 
    HouseIcon, 
    SearchIcon, 
    newPostIcon, 
    UnionIcon, 
    mainUser 
} from "../includes/images";

import { styles } from "../screens/home/styles";

export function NavBottom() {
    return (
        <View style={styles.footer}>
            <HouseIcon />
            <SearchIcon />
            <Image source={newPostIcon} style={{width: 25,  height: 25}}/>
            <UnionIcon />
            <Image source={mainUser} style={{width: 27,  height: 27, borderRadius: 50}} />
        </View>
    );
}