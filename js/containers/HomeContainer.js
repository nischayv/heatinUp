import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image
} from 'react-native';
import Home from '../components/Home';


export default class HomeContainer extends Component {
    constructor() {
        super();
        this.state = {
            tracking: false,
            buttonText: 'Begin Tracking'
        };
        this.track = this.track.bind(this);
    }

    track() {
        if(!this.state.tracking) {
            this.setState({tracking: true, buttonText: 'Stop Tracking'});
        } else {
            this.setState({tracking: false, buttonText: 'Start Tracking'});
        }
    }

    render() {
        return (
            <Home
                styles={styles}
                username={this.props.username}
                tracking={this.state.tracking}
                track={this.track}
                buttonText={this.state.buttonText}
            />
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        height: 60,
        width: 300,
        textAlign: 'center',
        fontSize: 22
    },
    button: {
        backgroundColor: '#5cafec'
    }
});