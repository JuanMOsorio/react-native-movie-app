import React from 'react';
import {
  StyleSheet,
  FlatList
} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';

import Movie from '../components/Movie';
import Category from '../components/Category';

const mapStateToProps = state => {
  return {
    list: state.videos.moviesList
  };
};

class MoviesList extends React.Component {

  viewMovie = (item) => { 
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: item,
      }
    });

    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'Movie'
      })
    );
  }

  renderCategory = ({item}) => ( 
    <Category 
      {...item} 
      onPress={()=> {this.viewMovie(item)}} 
    />
  );

  listHeaderComponent = () => (
    <FlatList
      horizontal
      data={this.props.list}
      renderItem={this.renderCategory}
      keyExtractor={({id}) => id.toString()}
    />
  );

  renderItem = ({item}) => (
    <Movie 
      {...item} 
       onPress={()=> {this.viewMovie(item)}}
    />
  );

  render = () => (
    <FlatList 
      style={styles.container}
      data={this.props.list}
      ListHeaderComponent = {this.listHeaderComponent}
      renderItem={this.renderItem}
      numColumns={3}
      keyExtractor={({id}) => id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  }
});

export default connect(mapStateToProps)(MoviesList);