import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../sections/componentes/Header'
import Player from '../player/Player';
import MovieLayout from './componentes/MovieLayout'
import Close from '../sections/componentes/Close';
import Description from '../videos/componentes/Description';

import { movieSelected } from '../actions/videos';

class Movie extends Component {
    closeVideo = () => {
        this.props.movieSelected(null);
    }

    render() {
        return (
            <MovieLayout>
                <Header>
                    <Close onPress={this.closeVideo} />
                </Header>
                <Player />
                <Description {...this.props.movie} />
            </MovieLayout>
        );
    }
}

const mapDispatchToProps = {
    movieSelected
}

const mapStateToProps = ({ videosReducer }) => ({ movie: videosReducer.selectedMovie })

export default connect(mapStateToProps, mapDispatchToProps)(Movie);