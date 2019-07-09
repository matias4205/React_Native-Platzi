import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { getMMSSFromMillis } from '../../utils/helpers';

const TimeLeft = (props) => {
    const currentSeconds = getMMSSFromMillis(props.time.currentTimeMillis);
    const totalSeconds = getMMSSFromMillis(props.time.totalTimeMillis);

    return (
        
        <View style={styles.container}>
            <Text style={styles.timeIndicator}> {currentSeconds} / {totalSeconds} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 105
    },
    timeIndicator: {
        color: 'white',
        fontWeight: 'bold'
    }  
})

export default TimeLeft;