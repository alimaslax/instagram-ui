import React from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { USERS_DATA } from '../data';
import { styles } from "../styles";

import { plusIcon } from "../../../includes/images";

export function Stories() {
    return (
        <View style={styles.stories}>
            <FlatList
                horizontal={true}
                data={USERS_DATA}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.story}>
                        <LinearGradient
                            colors={item.viewed ? ['#3a3a3a', '#3a3a3a'] : ['#FFD600', '#FF7A00', '#FF0069', '#D300C5', '#7638FA']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={{
                                borderWidth: 1.5,
                                borderRadius: 50,
                                padding: item.viewed ? 1.5 : 2
                            }}
                        >
                            <Image
                                style={styles.storiesCardImage}
                                source={item.photoURL}
                            />
                        </LinearGradient>

                        {item.main &&
                            <View style={styles.storiesCardMain}>
                                <Image
                                style={styles.storiesCardMainPlus}
                                    source={plusIcon}
                                />
                            </View>
                        }

                        <Text style={styles.storiesCardText}>{item.name}</Text>
                    </View>
                )}
            />
            <View style={styles.viewHr} />
        </View>
    );
}