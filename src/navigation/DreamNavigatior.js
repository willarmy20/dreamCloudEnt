import React from 'react'
import {createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Login from '../screens/Login';
import Icon from 'react-native-vector-icons/FontAwesome'
import Home from '../screens/Home';
import About from '../screens/About';
import Templates from '../screens/Templates';


const DreamNavigator = createStackNavigator({
    Login: Login,
    Home: Home
});

const DreamTabNavigator = createBottomTabNavigator({
    Home: {screen: DreamNavigator, navigationOptions:{
        tabBarIcon: (tabInfo) => {
            return <Icon name= 'home' size='25'  />
        }
    }},
    About: {screen: About, navigationOptions:{
        tabBarIcon: (tabInfo) => {
            return <Icon name= 'info-circle' size='25'/>
        }
    }},
    Templates: {screen: Templates, navigationOptions:{
        tabBarIcon: (tabInfo) => {
            return <Icon name= 'download' size='25'/>
        }
    }}
}, {
    tabBarOptions: {
        activeTintColor: "purple",
    }
}
)

export default createAppContainer(DreamTabNavigator);

