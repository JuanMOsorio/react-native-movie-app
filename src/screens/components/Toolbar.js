import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Toolbar = ({title, buttonMenu, onPress}) => (
  <View style={styles.toolbar}>
    <View style={styles.contentToolbar}>
      {buttonMenu && 
        <TouchableOpacity style={styles.buttonMenu}
          onPress={onPress}>
          <Icon name="menu" size={24} color="#303F9F"/>
        </TouchableOpacity>
      }
      <Text style={styles.textToolbar}>{title}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: '#000',
    paddingHorizontal: 14,
    justifyContent: 'center',
    elevation: 5
  },
  textToolbar: {
    fontSize: 22,
    color: '#303F9F',
    fontWeight: 'bold'
  },
  contentToolbar: {
    flexDirection: 'row'
  },
  buttonMenu: {
    height: 24,
    width: 24,
    marginRight: 14
  }
});

export default Toolbar;