import { StackNavigator } from 'react-navigation';
import Home from './screens/Home/Home';
import Details from './screens/Details/Details';
import Login from './screens/Login/Login';
import Cart from './screens/Cart/Cart';

export const RootStack = StackNavigator({
    Home: {
        screen: Home
    },
    Details: {
        screen: Details
    },
    Login: {
        screen: Login
    },
    Cart:{
        screen:Cart
    }
},
    {
        initialRouteName: 'Cart'
    }
);
