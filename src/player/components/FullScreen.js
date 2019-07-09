import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import FullScreen_icon from '../../../assets/Player_assets/FullScreen_icon.png'
import MinimizeScreen_icon from '../../../assets/Player_assets/MinimizeScreen_icon.png';

const FullScreen = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.container}
            hitSlop={{
                left: 5,
                top: 5,
                bottom: 5,
                right: 5
            }}
        >
            { props.fullscreen ? <Image source={MinimizeScreen_icon} style={styles.fullScreenIcon} /> : <Image source={FullScreen_icon} style={styles.fullScreenIcon}/> }
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    },
    fullScreenIcon: {
        width: 18,
        resizeMode: 'contain'
    }
})

export default FullScreen;