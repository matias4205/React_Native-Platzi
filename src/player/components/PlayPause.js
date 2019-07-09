import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import PlayButton_icon from '../../../assets/Player_assets/Play_icon.png'
import PauseButton_icon from '../../../assets/Player_assets/Pause_icon.png'

const PlayPause = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.container}
            underlayColor='white'
            hitSlop={{
                left: 5,
                top: 5,
                bottom: 5,
                right: 5
            }}
        >
            { props.paused ? <Image source={PlayButton_icon} style={styles.play} /> : <Image source={PauseButton_icon} style={styles.pause}/> }
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 25,
        marginRight: 10,
        marginVertical: 5,
    },
    play: {
        width: 16,
        resizeMode: 'contain'
    },
    pause: {
        width: 16,
        resizeMode: 'contain'
    }
})

export default PlayPause;