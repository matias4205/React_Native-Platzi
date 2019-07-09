import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const EmptyList = (props) => {
    return (
        <View style={styles.container}>
            <Text> { props.text } </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default EmptyList;