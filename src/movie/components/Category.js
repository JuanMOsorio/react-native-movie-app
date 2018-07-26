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

const Movie = ({background_image, genres, onPress}) => ( 
  <TouchableNativeFeedback
    useForeground={true}
    background={TouchableNativeFeedback.Ripple('#303F9F')} 
    onPress={() => setTimeout(onPress, 0)}  
  >
    <View>
      <ImageBackground 
        style={styles.container}
        source={{uri: background_image}}
      >
        {
          genres?
            <Text style={styles.genres}>{genres[0]}</Text> 
            :
            <Text style={styles.genres}>Horror</Text>
        }
      </ImageBackground>
    </View>
  </TouchableNativeFeedback>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    minWidth: width - 5,
    maxWidth: width - 5,
    height: 170,
    maxHeight: 170,
    justifyContent: 'center'
  },
  genres: {
    color: 'white',
    fontSize: 36,
    alignSelf: 'center'
  },
});

export default Movie;