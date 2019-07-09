import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

import backgroundImage from '../../../assets/backgronund.png';

const CategoryList_Layout = (props) => {
    return (
        <ImageBackground source={backgroundImage} style={style.container}>
            <Text style={style.title}> {props.title} </Text>
            {props.children}
        </ImageBackground>
    );
};

const style = StyleSheet.create({
    container: {
        paddingVertical: 30,
        paddingHorizontal: 10
    },
    title: {
        color: '#4c4c4c',
        fontSize: 20, 
        fontWeight: 'bold',
        marginBottom: 10
    }
});

export default CategoryList_Layout;