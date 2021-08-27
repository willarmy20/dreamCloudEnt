import 'react-native-gesture-handler';
import React from "react";
//Navigation componets
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from '../screens/About'
import Home from '../screens/Home'
import Templates from '../screens/Templates'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Text, View , ImageBackground} from 'react-native';



function HomeScreen(){
    return(
      
      <Home/>
  
  );
}
function AboutScreen(){
    return(
        <About/>
      
  );
}
function ThemeScreen(){
    return(

       <Templates/>
  );
}

const Tab = createBottomTabNavigator();
export default function Navigation(){
  return(
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size, padding}) =>{
              let iconName;
              if(route.name === "DreamCloudEnt"){
                  iconName = focused ? "home" : "home-outline";
              } else if (route.name === "About"){
                  iconName = focused ? "information-circle" : "information-circle-outline";
              }else if(route.name === "Templates"){
                  iconName = focused ? "apps" : "apps-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'purple',
            tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name={"DreamCloudEnt"} component={HomeScreen}></Tab.Screen>
        <Tab.Screen name={"About"} component={AboutScreen}></Tab.Screen> 
        <Tab.Screen name={"Templates"} component={ThemeScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
);
}