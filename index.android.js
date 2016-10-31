import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import  Router  from 'react-native-simple-router';
import LoginContainer from './js/containers/LoginContainer';
import BackButton from './js/components/BackButton';

export default class heatinUp extends React.Component {
  render() {
    return (
        <Router
            firstRoute={login}
            headerStyle={styles.header}
            titleStyle={styles.title}
            backButtonComponent={BackButton}
        />
    );
  }
}

const login = {
  name: 'HeatinUp',
  component: LoginContainer
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5cafec'
  },
  title: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 3
  }
});


AppRegistry.registerComponent('heatinUp', () => heatinUp);
