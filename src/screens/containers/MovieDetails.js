import React from 'react';
import {
  Animated,
  StatusBar,
  BackHandler
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';

import Header from '../components/Header';
import Player from '../components/Player';
import Details from '../../movie/components/Details';

class Movie extends React.Component {

  state = {opacity: new Animated.Value(0)};

  closeVideo = () => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: null
      }
    });
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    Animated.timing(
      this.state.opacity,
      {
        toValue: 1,
        duration: 1000
      }
    ).start();
  }

  componentWillUnmount = () => BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  
  onBackPress = () => {
    this.props.dispatch(
      NavigationActions.back({
        key: null
      })
    )
    return true
  }

  render = () => (
    <Animated.View
      style={{flex: 1, opacity: this.state.opacity}}
    >
      <Header
        onPress={() => this.props.navigation.goBack()}
        {...this.props.movie}
      />
      <StatusBar
        backgroundColor="#303F9F"
        barStyle="light-content"
      />
      <Player />
      <Details {...this.props.movie} />
    </Animated.View>
  );
}

const mapStateToProps = state => {
  return {
    movie: state.videos.selectedMovie
  };
};

export default connect(mapStateToProps)(Movie);