import {connect} from 'react-redux';
import {reduxifyNavigator} from 'react-navigation-redux-helpers';

import AppNavigator from './Navigation';

const ReduxifyApp = reduxifyNavigator(AppNavigator, 'root')

// class AppNavigatorWithState extends ReduxifyApp {

  
// }

const mapStateToProps = state => {
  return {
    state: state.navigation
  };
};

// export default connect(mapStateToProps)(AppNavigatorWithState);

export default connect(mapStateToProps)(ReduxifyApp);
