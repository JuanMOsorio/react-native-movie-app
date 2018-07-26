import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';
import {DrawerItems} from 'react-navigation';

const DrawerComponent = props => (
  <ScrollView>
    <View style={styles.container}>
      <Text style={styles.logo}>APPMOVIE</Text>
      <DrawerItems {...props} />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  logo: {
    fontSize: 22,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10
  }
});

export default DrawerComponent;
