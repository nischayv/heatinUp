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
import BackButton from './js/components/BackButton';

export default class heatinUp extends React.Component {

    constructor() {
        super();

        this.logout = this.logout.bind(this);
    }

    logout = async () => {
        try {
            await AsyncStorage.removeItem('json-token');
        } catch (error) {
            console.log('AsyncStorage error: ' + error.message);
        }
    };

    render() {
    return (
        <Router
            firstRoute={login}
            headerStyle={styles.header}
            titleStyle={styles.title}
            backButtonComponent={BackButton}
            backButtonProps={this.logout}
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
