import { StackNavigator } from 'react-navigation';
import Home from './screens/Home/Home';
import Details from './screens/Details/Details';
import Login from './screens/Login/Login';
import { Drawer } from 'native-base';
import { View, StyleSheet } from 'react-native';

export const RootStack = StackNavigator({
    Home: {
        screen: Home
    },
    Details: {
        screen: Details
    },
    Login: {
        screen: Login
    }
},
    {
        initialRouteName: 'Login'
    }
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})