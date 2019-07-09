import React, { Component } from 'react';
import { ScrollView } from 'react-native';

class Home extends Component {
    render() {
        return (
            <ScrollView>
                {this.props.children}
            </ScrollView>
        );
    }
}

export default Home;