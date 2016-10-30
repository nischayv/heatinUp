import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import  Router  from 'react-native-simple-router';
import LoginContainer from './js/containers/LoginContainer'

export default class heatinUp extends React.Component {
  render() {
    return (
        <Router
            firstRoute={login}
            headerStyle={styles.header}
            titleStyle={styles.title}
        />
    );
  }
}

const login = {
  name: 'Login',
  component: LoginContainer
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5cafec'
  },
  title: {
    alignSelf: 'center'
  }
});


AppRegistry.registerComponent('heatinUp', () => heatinUp);
