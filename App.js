import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {RootStack} from './src/Routes';


export default class App extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        {/* <MainNav title="Header" /> */}
        <RootStack />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
