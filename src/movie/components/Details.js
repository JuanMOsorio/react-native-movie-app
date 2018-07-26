import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  WebView,
  ScrollView,
} from 'react-native';

const makeHTML = (id) => {
  return (`
    <style>
      .video {
        position: relative;
        padding-bottom: 56.25%;
      }
      iframe {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
      }
    </style>
    <div class="video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  `);
};

const Details = ({medium_cover_image, description_full, yt_trailer_code}) => (
  <ScrollView>
    <View style={styles.bottom}>
      <View style={styles.details}>
        <Image
          style={styles.cover}
          source={{ uri: medium_cover_image }}
        />
        <Text style={styles.description}>{description_full}</Text>
      </View>
    </View>
    <View style={styles.trailer}>
      <WebView
        source={{html: makeHTML(yt_trailer_code ) }}
      />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  trailer: {
    height: 200
  },
  details: {
    flexDirection: 'row',
    marginBottom: 20
  },
  cover: {
    width: 125,
    height: 190
  },
  bottom: {
    padding: 20,
    flex: 1
  },
  description: {
    fontSize: 16,
    color: '#000',
    marginLeft: 10,
    flex: 1
  }
});

export default Details;
