import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    AsyncStorage
} from 'react-native';

const BackButton = (logout) => {
    return (
        <Text
            style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
                paddingLeft: 5,
                paddingTop: 3
            }}
            onPress={logout}
        >Logout</Text>
    );
};

export default BackButton;