import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStack } from './src/Routes';
import { Drawer } from 'native-base';
import SideBar from './src/components/SideBar/SideBar';


export default class App extends React.Component {
  onCloseDrawer = () => {
    this.drawer._root.close();
  }
  onOpenDrawer = () => {
    this.drawer._root.open()
  }
  render() {
    return (
      <Drawer
        ref={(ref) => this.drawer = ref}
        onCloseDrawer={() => this.onCloseDrawer}
        content={<SideBar />} >
        <View style={styles.container}>
          <RootStack
            screenProps={{ onOpenDrawer: this.onOpenDrawer }} />
        </View>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
