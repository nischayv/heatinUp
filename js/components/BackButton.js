import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const BackButton = () => {
    return (
        <Text
            style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
                paddingLeft: 5,
                paddingTop: 3
            }}>Back</Text>
    );
};

export default BackButton;