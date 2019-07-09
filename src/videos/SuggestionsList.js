import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import { movieSelected } from '../actions/videos';

import Layout from './componentes/SuggestionList_Layout'
import Empty from './componentes/EmptyList';
import Separator from './componentes/VerticalSeparator';
import Suggestion from './componentes/Suggestion';

class SuggestionsList extends Component {
    renderEmpty = () => (
        <Empty text="No hay sugerencias" />
    )

    renderItem = ({item}) => {
        return <Suggestion onPress={ () => this.props.movieSelected(item) } horizontal {...item} />
    }

    itemSeparator = () => <Separator />

    keyExtractor(item){
        return item.id.toString()
    }

    render() {
        return( 
            <Layout title="Recomendado para ti">
                <FlatList keyExtractor={ this.keyExtractor } ListEmptyComponent={ this.renderEmpty } data={this.props.movies} ItemSeparatorComponent={ this.itemSeparator } renderItem={ this.renderItem } />
            </Layout>
        );
    }
}

const mapStateToProps = ({ videosReducer }) => ( videosReducer )
const mapDispatchToProps = {
    movieSelected
}

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionsList);