import React from 'react';
import { View } from 'react-native';

import Logo from "../../../assets/logo.svg";
import Stroke from "../../../assets/stroke.svg";
import Message from "../../../assets/message.svg";

import { styles } from '../styles';

export function NavTop() {
    return (
        <View style={styles.header}>
            <Logo />
            <View style={styles.headerOptions}>
                <Stroke />
                <Message />
            </View>
        </View>
    );
}