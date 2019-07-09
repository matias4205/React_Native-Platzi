import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import Layout from './componentes/CategoryList_Layout'
import Empty from './componentes/EmptyList';
import Separator from '../sections/componentes/HorizontalSeparator';
import Category from './componentes/Category';

class CategoriesList extends Component {
    renderEmpty = () => (
        <Empty text="No hay Categorias" />
    )

    renderItem = ({item}) => {
        return <Category {...item} />
    }

    itemSeparator = () => <Separator />

    keyExtractor(item){
        return item.id.toString()
    }

    render() {
        return(
            <Layout title="Categorias">
                <FlatList horizontal keyExtractor={ this.keyExtractor } ListEmptyComponent={ this.renderEmpty } data={this.props.categories} ItemSeparatorComponent={ this.itemSeparator } renderItem={ this.renderItem } />
            </Layout>
        );
    }
}

const mapStateToProps = ({ videosReducer }) => ( videosReducer )

export default connect(mapStateToProps)(CategoriesList);