import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Logo from "../../assets/logo.svg";
import Stroke from "../../assets/stroke.svg";
import Message from "../../assets/message.svg";

import foto from "../../assets/foto.png";
import foto2 from "../../assets/foto2.png";
import foto3 from "../../assets/foto3.png";
import foto4 from "../../assets/foto4.png";

const DATA = [
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto,
        name: "sare728",
        viewed: false
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto2,
        name: "hiuluketa",
        viewed: false
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto3,
        name: "priv_design",
        viewed: false
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto4,
        name: "mor6byu",
        viewed: false
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto2,
        name: "andree_sl",
        viewed: false
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto3,
        name: "mra_i110",
        viewed: false
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto4,
        name: "tina90br",
        viewed: false
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto2,
        name: "addleticia",
        viewed: true
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto3,
        name: "more_princ",
        viewed: true
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto4,
        name: "kissnow",
        viewed: true
    },
]

export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Logo />
                <View style={styles.headerOptions}>
                    <Stroke />
                    <Message />
                </View>
            </View>


            <View style={styles.stories}>
                <FlatList
                    horizontal={true}
                    data={DATA}
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
                                    padding: item.viewed ? 1.5 : 3
                                }}
                            >
                                <Image
                                    style={styles.storiesCardImage}
                                    source={item.photoURL}
                                />
                            </LinearGradient>

                            <Text style={styles.storiesCardText}>{item.name}</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        height: 56,
        paddingHorizontal: 10,
        marginTop: 40,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    headerOptions: {
        alignItems: "center",
        flexDirection: "row",
        gap: 20,
        marginRight: 5
    },
    stories: {
        width: "100%",
        paddingLeft: 20,
        paddingVertical: 3,
        // height: 115,
        alignItems: "center"
    },
    story: {
        alignItems: "center",
        marginRight: 10,
        gap: 3
    },
    storiesCardImage: {
        width: 79,
        height: 79,
        borderWidth: 4,
        borderColor: "black",
        borderRadius: 50,
    },
    storiesCardText: {
        color: "white",
        fontSize: 12,
        // backgroundColor: "pink"
    }
});
