import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import Home from './screens/Home';
import Header from './sections/componentes/Header'; 
import SuggestionsList from './videos/SuggestionsList';
import CategoriesList from './videos/CategoriesList';
import Movie from './screens/Movie';
import Search from './sections/containers/Search';

import * as videosActions from './actions/videos';

class AppLayout extends Component {
    async componentDidMount(){
        this.props.fetchSuggestionList(13);
        this.props.fetchCategoriesList();
    }

    render() {
        const { selectedMovie } = this.props;
        
        if(selectedMovie){
            return <Movie/>
        }

        return (
            <Home>
                <Header />  
                
                <Search />

                <CategoriesList />
                <SuggestionsList />
          </Home>
        );
    }
}

const mapStateToProps = ( { videosReducer: { selectedMovie } } ) => ( { selectedMovie } )

export default connect(mapStateToProps, videosActions)(AppLayout);