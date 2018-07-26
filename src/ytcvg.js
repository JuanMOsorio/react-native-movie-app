import React from 'react';
import {connect} from 'react-redux';

import Toolbar from './screens/components/Toolbar';
import MoviesList from './movie/containers/MoviesList';
import Home from './screens/containers/Home';
import MovieDetails from './screens/containers/MovieDetails';

import API from './utils/Api';

class Principal extends React.Component {

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

  render = () => {
    
    if (this.props.selectedMovie) {
      return <MovieDetails />;
    };

    return (
      <Home>
        <Toolbar title={'APPMOVIE'} buttonMenu />
        <MoviesList />
      </Home>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedMovie: state.selectedMovie
  };
};

export default connect(mapStateToProps)(Principal);