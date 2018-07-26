import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button
} from 'react-native';
import {connect} from 'react-redux';

class Profile extends React.Component {

  static navigationOptions = () => {
    return {
      title: 'Perfil'
    }
  }

  handleLogout = () => {
    this.props.dispatch({
      type: 'REMOVE_USER',
    });
    this.props.navigation.navigate('Loading');
  }

  render = () => (
    <SafeAreaView style={styles.container}>
      <Text>Juan Martinez</Text>
      <Button
        title="Cerrar sesión"
        color="#67a52e"
        onPress={this.handleLogout}
      />
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const mapStateToProps = state => {
  return {
    user: state.user
  }
};

export default connect(mapStateToProps)(Profile)
