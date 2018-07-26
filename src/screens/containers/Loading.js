import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const Loading = () => (
  <View style={styles.container}>
    <Text style={styles.logo}>APPMOVIE</Text>
    <ActivityIndicator size={50} color={'#FFF'} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303F9F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    fontSize: 50,
    color: '#FFF',
    marginBottom: 20
  }
});

export default Loading;
