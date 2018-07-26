import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Text,
  Dimensions,
  TouchableNativeFeedback,
  View
} from 'react-native';

const {width} = Dimensions.get('window');

const Movie = ({medium_cover_image, year, onPress}) => ( 
  <TouchableNativeFeedback
    useForeground={true}
    background={TouchableNativeFeedback.Ripple('#303F9F')} 
    onPress={() => setTimeout(onPress, 250)}  
  >
    <View>
      <ImageBackground 
        style={styles.container}
        source={{uri: medium_cover_image}}
      >
        <Text style={styles.year}>{year}</Text>
      </ImageBackground>
    </View>
  </TouchableNativeFeedback>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    minWidth: (width / 3) - 10,
    maxWidth: (width / 3) - 10,
    height: 170,
    maxHeight: 170
  },
  year: {
    backgroundColor: '#303F9F',
    padding: 5,
    margin: 5,
    color: 'white',
    fontSize: 12,
    borderRadius: 10,
    alignSelf: 'flex-end'
  },
});

export default Movie;