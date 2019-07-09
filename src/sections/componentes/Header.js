import React from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';

import headerImg from '../../../assets/logo.png';

const Header = (props) => {
    return (
        <View>
            <SafeAreaView>
                <View style={styles.container}>
                    <Image source={headerImg} style={styles.logo} />
                    <View style={styles.right}>
                        {props.children}
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 25,
        resizeMode: 'contain'
    },
    container:{
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})

export default Header;