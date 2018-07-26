import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class About extends React.Component {

  static navigationOptions = () => {
    return {
      title: 'Sobre esta app'
    };
  }

  render = () => (
    <View style={styles.container}>
      <View style={styles.logoAppMovie}>
        <Text style={styles.textLogoAppMovie}>
          APPMOVIE
        </Text>
      </View>
      <Text>Hola y bienvenido a la aplicacion APPMOVIE</Text>
      <Text>Licencia MIT</Text>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#022c43',
  },
  logoAppMovie: {
    justifyContent: 'center',
    margin: 20,
  },
  textLogoAppMovie: {
    fontSize: 50,
    color: '#FFF'
  }
});

export default About;
