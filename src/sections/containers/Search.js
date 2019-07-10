import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';


import { SET_MOVIE_SELECTED } from '../../types/videos'
import API from '../../utils/api';

class Search extends Component {
    state = {
        text: ''
    }

    handleSubmit = async() => {
        console.log(this.state.text);
        const movies = await API.searchMovie(this.state.text);
        this.props.dispatch({
            type: SET_MOVIE_SELECTED,
            payload: movies[0]
        });
    }

    handleChangeText = (text) => {
        this.setState({
            text
        });
    }

    render() {
        return (
            <TextInput style={styles.input} onChangeText={this.handleChangeText} onSubmitEditing={this.handleSubmit} autoCapitalize="none" autoCorrect={false} underlineColorAndroid="transparent" placeholder="Busca tu pelicula favorita" />
        );
    }
}

const styles = StyleSheet.create({
    input: {
      padding: 15,
      fontSize: 15,
      borderWidth: 1,
      borderColor: '#eaeaea'
    }
  })

export default connect(null)(Search);