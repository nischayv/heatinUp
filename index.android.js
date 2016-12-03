import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    AsyncStorage
} from 'react-native';
import  Router  from 'react-native-simple-router';
import LoginContainer from './js/containers/LoginContainer';
import LogoutButton from './js/components/LogoutButton';
import BackButton from './js/components/BackButton';
// If start up and token exists - navigate to home page - in login container before compenent mounts

export default class heatinUp extends React.Component {

    render() {
        return (
            <Router
                firstRoute={login}
                headerStyle={styles.header}
                titleStyle={styles.title}
                backButtonComponent={BackButton}
                rightCorner={LogoutButton}
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
