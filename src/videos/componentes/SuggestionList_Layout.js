import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SuggestionList_Layout = (props) => {
    return (
        <View style={style.container}>
            <Text style={style.title}> {props.title} </Text>
            {props.children}
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    title: {
        color: '#4c4c4c',
        fontSize: 20, 
        fontWeight: 'bold',
        marginBottom: 10,
    }
});

export default SuggestionList_Layout;