import React from 'react';
import { StyleSheet, Slider } from 'react-native';

const ProgressBar = (props) => {
    return (
        <Slider style={ {flex: 1} } onSlidingComplete={props.onSlidingComplete} onValueChange={props.onValueChange} value={props.sliderValue} maximumValue={props.duration.totalTimeMillis} />
    );
};

const styles = StyleSheet.create({
    
})

export default ProgressBar;