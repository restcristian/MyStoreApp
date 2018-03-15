import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainNav from '../../components/MainNav/MainNav';

export default class Home extends Component {
    static navigationOptions = ({ navigation, screenProps }) => {
        return {
            headerTitle: <MainNav
                title="HomeScreen"
                navigation={navigation}
                screenProps={screenProps} />
        }
    }
    render() {
        return (
            <View>
                <Text>Home Screen</Text>
            </View>
        );
    }
}