import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Button } from 'native-base';

const Home = ({styles, username, tracking, track, buttonText}) => {
    return (
        <View style={styles.mainView}>
            {
                tracking ? <Text style={styles.text}>{username}, you are now being tracked by the NSA!</Text> : null
            }
            <View style={{width: 300, paddingTop: 10}}>
                <Button block large style={styles.button} onPress={track}>{buttonText}</Button>
            </View>
        </View>
    );
};

export default Home;