import React from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';

import loadingImg from '../../../assets/logo.png'

const Loading = (props) => {
    return (
        <View style={styles.container}>
            <Image source={loadingImg} style={styles.logo}/>
            <ActivityIndicator size='large' />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        marginBottom: 10,
        width: 200,
        height: 80,
        resizeMode: 'contain'
    }
})

export default Loading;