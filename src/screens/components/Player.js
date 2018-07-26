import React from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  View,
  TouchableWithoutFeedback
} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Player extends React.Component {

  state = {loading: true, paused: false, showButton: true};

  onBuffer = ({isBuffering}) => this.setState({loading: isBuffering});

  onLoad = () => this.setState({loading: false});

  playPause = () => this.setState({paused: !this.state.paused});

  showButton = () => this.setState({showButton: !this.state.showButton});

  render = () => (
    <TouchableWithoutFeedback onPress={this.showButton}>
      <View style={styles.container}>
        <View style={styles.video}>
          <Video
            source={{uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
            style={styles.video}
            resizeMode="contain"
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
            paused={this.state.paused}
          />
        </View>
        <View style={styles.overlay}>
          {
            this.state.loading?
            <ActivityIndicator color="#536DFE"  size={50} /> : 

            this.state.showButton &&        
            <TouchableWithoutFeedback onPress={this.playPause}>
              {this.state.paused ?
                <Icon name="play-circle-outline" size={50} color="#FFF"/> :
                <Icon name="pause-circle-outline" size={50} color="#FFF"/>
              }
            </TouchableWithoutFeedback>
          }
        </View>
      
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '56.25%'
  },
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'black'
  },
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Player;