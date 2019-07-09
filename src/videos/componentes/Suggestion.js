import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

import backgroundImage from '../../../assets/backgronund.png'

const Suggestion = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.container}>
                <View>
                    <Image style={
                        props.horizontal ? styles.imageHorizontal : styles.imageVertical
                    } source={{
                        uri: props.medium_cover_image
                    }} />
                    <View style={styles.genre}>
                        <Text style={styles.genreText}>{props.genres[0]}</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <Text style={styles.title}> {props.title} </Text>
                    <Text style={styles.year}> {props.year} </Text>
                    <Text style={styles.rating}> {props.rating} Estrellas</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 8,
        overflow: 'scroll'
    },
    left: {

    },
    right: {
        paddingLeft: 10,
        justifyContent: 'space-between'
    },
    imageHorizontal: {
        resizeMode: 'cover',
        width: 150,
        height: 80
    },
    imageVertical: {
        resizeMode: 'cover',
        width: 100,
        height: 150
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    year: {
        fontSize: 11,
        backgroundColor: '#70b124',
        borderRadius: 15,
        paddingVertical: 4,
        paddingHorizontal: 6,
        alignSelf: 'flex-start',
        color: 'white'
    },
    rating: {
        fontSize: 12,
    },
    genre: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'black',
        paddingVertical: 3,
        paddingHorizontal: 5
    },
    genreText: {
        color: 'white',
        fontSize: 10
    }
});

export default Suggestion;