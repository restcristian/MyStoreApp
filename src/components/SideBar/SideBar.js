import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SideBar = (props) => {
    return (
        <View style = {styles.SideBar}>
            <Text>SideBar</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    SideBar: {
        height: 2000,
        backgroundColor: '#fff'
    }
});
export default SideBar;