import React from 'react';
import { View, Text, FlatList, Image, Dimensions } from 'react-native';
import { styles } from './styles';

import photo from "../../assets/photo.png";
import imgpost from "../../assets/imginstagram.jpg";
import Points from "../../assets/points.svg";

import { Stories } from './components/stories';
import { NavTop } from './components/navtop';

export function Home() {
    const screenWidth = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            <NavTop />
            <Stories />

            <View style={styles.viewHr} />

            <View style={styles.content}>
                <View style={styles.contentItem}>
                    <View style={styles.contentItemHeader}>
                        <View style={styles.contentItemHeaderLeft}>
                            <Image source={photo} style={styles.contentItemHeaderImg} />
                            <Text style={styles.contentItemHeaderTxt}>sare728</Text>
                        </View>
                        <Points style={{transform: [{ rotate: '90deg' }]}}/>
                    </View>

                    <Image source={imgpost} style={{width: screenWidth,  height: screenWidth}} />
   
                </View>
            </View>
        </View>
    );
}