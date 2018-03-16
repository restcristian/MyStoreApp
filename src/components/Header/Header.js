import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style = {styles.Header}>
                <Text>Header</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Header: {
        height: 200,
        backgroundColor: '#f6f6f7'
    }
});