import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import  Router  from 'react-native-simple-router';
import HomeContainer from './js/containers/HomeContainer'

export default class heatinUp extends React.Component {
  render() {
    return (
        <Router
            firstRoute={home}
        />
    );
  }
}

const home = {
  name: 'Home',
  component: HomeContainer
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#7E57C2',
  },
  title: {
    alignSelf: 'center'
  }
});


AppRegistry.registerComponent('heatinUp', () => heatinUp);
