import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text
} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';

import API from '../../utils/Api';

class Search extends React.Component {

  state = {text: ''};

  handleSubmit = async () => {
    const movies = await API.searchMovie(this.state.text);
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: movies[0]
      }
    });
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'Movie'
      })
    );
  }

  handleChangeText = (text) => this.setState({text});

  render = () => (
    <View style={styles.container}>
      <TextInput
        placeholder="Busca tu película favorita"
        autoCapitalize="none"
        onSubmitEditing={this.handleSubmit}
        onChangeText={this.handleChangeText}
        style={styles.input}
      />
      <Text>Hola</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14
  },
  input: {
    borderWidth: 1,
    borderColor: '#eaeaea'
  }
});

export default connect(null)(Search);