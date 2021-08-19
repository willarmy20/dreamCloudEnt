import React from "react";
//Navigation componets
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import IonicIcons from "react-native-vector-icons";
import { Text, Dimensions } from "react-native";
//Import screens
import Home from "../screens/Home";
import About from "../screens/About";
import Theme from "../screens/Theme";

const fullscreenWidth = Dimensions.get("window").width;

const Stack = createStackNavigator();

function HomeStackScreen(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component= {Home} />
        </Stack.Navigator>
    );
}
function AboutStackScreen(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="About" component= {About} />
        </Stack.Navigator>
    );
}
function ThemeStackScreen(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Theme" component= {Theme} />
        </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function Navigation(props){
    return(
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={({route}) => ({
                headerTitle:() => <Text>Header</Text>,
                tabBarIcon: ({focused, color, size, padding}) =>{
                    let IconName
                    if(route.name === "Home"){
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "About"){
                        iconName = focused ? "information-circle" : "information-circle-outline";
                    }else if(route.name === "Theme"){
                        iconName = focused ? "apps" : "apps-outline";
                    }
                    return(
                        <IonicIcons 
                        name={iconName} 
                        size={size} 
                        color={color} 
                        style={{paddingBottom : padding}}/>
                    );
                },
            })}
            tabBarOptions={{
                activeTinitColor: "lightseagreen",
                inactiveTintColor: "gray",
                lableStyle: {fontSize: 16},
                style: {width: fullscreenWidth}
            }}
            >
                <Tab.screen name="Home" component={HomeStackScreen} />
                <Tab.screen name="About" component={AboutStackScreen} />
                <Tab.screen name="Theme" component={ThemeStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}