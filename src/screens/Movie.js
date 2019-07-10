import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Animated } from 'react-native';

import Header from '../sections/componentes/Header'
import Player from '../player/Player';
import MovieLayout from './componentes/MovieLayout'
import Close from '../sections/componentes/Close';
import Description from '../videos/componentes/Description';

import { movieSelected } from '../actions/videos';

class Movie extends Component {
    state = {
        opacity: new Animated.Value(0)
    }
    constructor(){
        
    }
    closeVideo = () => {
        this.props.movieSelected(null);
    }

    componentDidMount(){
        Animated.timing(
            this.state.opacity,
            {
                toValue: 1,
                duration: 1000
            }
        ).start();
    }

    render() {
        return (
            <Animated.View
                style = {{
                    flex: 1,
                    opacity: this.state.opacity,
                }}
            >
                <MovieLayout>
                    <Header>
                        <Close onPress={this.closeVideo} />
                    </Header>
                    <Player />
                    <Description {...this.props.movie} />
                </MovieLayout>
            </Animated.View>
            
        );
    }
}

const mapDispatchToProps = {
    movieSelected
}

const mapStateToProps = ({ videosReducer }) => ({ movie: videosReducer.selectedMovie })

export default connect(mapStateToProps, mapDispatchToProps)(Movie);