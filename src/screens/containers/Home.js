import React from 'react';
import {connect} from 'react-redux';

import Toolbar from '../components/Toolbar';
import MoviesList from '../../movie/containers/MoviesList';

import API from '../../utils/Api';

class Home extends React.Component {

  static navigationOptions = () => {
    return {
      title: 'inicio'
    };
  }

  async componentDidMount() {
    const categoryList = await API.getMovies();
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    });
    const moviesList = await API.getMovies();
    this.props.dispatch({
      type: 'SET_MOVIES_LIST',
      payload: {
        moviesList
      }
    });
  }

  render = () => (
    <React.Fragment>
      <Toolbar title={'APPMOVIE'} buttonMenu onPress={() => this.props.navigation.toggleDrawer()}/>
      <MoviesList />
    </React.Fragment>
  );

}

export default connect(null)(Home);