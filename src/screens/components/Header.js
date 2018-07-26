import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({onPress, title}) => (
  <View style={styles.container}> 
    <View style={styles.navbar}>
      <View style={styles.textView}>
        <Text 
          numberOfLines={1}
          style={styles.textTitle}
        >
          {title}
        </Text>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity 
          style={styles.button}
          onPress={onPress}
        >
          <Icon name="close" size={24} color="#FFF"/>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 56, 
    backgroundColor: '#3F51B5',
    justifyContent: 'center',
    paddingHorizontal: 14
  },
  navbar: {
    flexDirection: 'row'
  },
  textView: {
    justifyContent: 'center'
  },
  textTitle: {
    fontSize: 22,
    color: '#FFF'
  },
  buttonView: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'flex-end'
  },
  button: {
    height: 24, 
    width: 24
  }
});

export default Header;