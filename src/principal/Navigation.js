import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createDrawerNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Drawer from '../screens/containers/Drawer';
import Home from '../screens/containers/Home';
import MovieDetails from '../screens/containers/MovieDetails';
import Search from '../screens/containers/Search';
import About from '../screens/containers/About';
import Profile from '../screens/containers/Profile';

const Main = createStackNavigator (
  {
    Home: Home,
  },
  {
    headerMode: 'none',
    cardStyle: {
      backgroundColor: 'white'
    } 
  }
);

const TabNavigator = createBottomTabNavigator (
  {
    Home: {screen: Main},
    Search: {screen: Search},
    About: {screen: About},
    Profile: {screen: Profile}
  },
  {
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
            iconName = `home${focused ? '' : ''}`;
        } else if (routeName === 'Search') {
            iconName = `search${focused ? '' : ''}`;
        } else if (routeName === 'About') {
            iconName = `help${focused ? '' : ''}`;
        } else if (routeName === 'Profile') {
            iconName = `person${focused ? '' : ''}`;
        } 
        return <Icon name={iconName} size={24} color={tintColor} />;
      },
  }),
    tabBarOptions: {
      activeTintColor: '#303F9F',
      inactiveTintColor: '#BDBDBD',
      style: {
        backgroundColor: '#000',
        shadowColor: '#000',
        borderTopWidth: 1,
      },
    }
  }
);

const WithModal = createStackNavigator (
  {
    Main: {screen: Home},
    Movie: MovieDetails
  },
  {
    mode: 'modal',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: 'white'
    },
    navigationOptions: {
      gesturesEnabled: true
    }
  }
);

const DrawerNavigator = createDrawerNavigator (
  {
    Main: {
      screen: WithModal,
      navigationOptions: {
        title: 'Inicio',
        drawerIcon:  <Icon name="person" size={24} color="#FFF"/>
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        title: 'Buscar',
        drawerIcon:  <Icon name="search" size={24} color="#FFF"/>
      }
    },
    About: {
      screen: About,
      navigationOptions: {
        title: 'Acerca de',
        drawerIcon:  <Icon name="help" size={24} color="#FFF"/>
      }
    }
  },
  {
    drawerWidth: 200,
    drawerBackgroundColor: '#303F9F',
    contentComponent: Drawer,
    contentOptions: {
      activeBackgroundColor: '#000',
      activeTintColor: '#303F9F',
      inactiveTintColor: '#000',
      inactiveBackgroundColor: '#303F9F',
      itemStyle: {
        borderBottomWidth: .5,
        borderBottomColor: 'rgba(0,0,0,.5)'
      },
      labelStyle: {
        marginHorizontal: 0,
        color: '#FFF'
      },
      iconContainerStyle: {
        marginHorizontal: 5,
      }
    }
  }
);

const SwitchNavigator = createSwitchNavigator (
  {
    App: DrawerNavigator,
  },
  {
    initialRouteName: 'App',
  }
);

export default SwitchNavigator;
