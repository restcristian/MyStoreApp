import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MainNav from '../../components/MainNav/MainNav';

export default class Details extends Component{
    static navigationOptions = ({navigation}) =>{
        return{
            headerTitle:<MainNav title = "DetailsScreen" navigation = {navigation} />
        }
    }
    render(){
        return(
            <View>
                <Text>Details Screen</Text>
            </View>
        );    
    }
}