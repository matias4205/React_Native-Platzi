import React from 'react';
import { View, StyleSheet } from 'react-native';

const ControlsLayout = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(53, 53, 53, .5)',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 40,
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
})

export default ControlsLayout;