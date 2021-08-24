import 'react-native-gesture-handler';
import React from "react";
//Navigation componets
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Text, View } from 'react-native';



function HomeScreen(){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>DreamCloudEnt</Text>
    </View>
  );
}
function AboutScreen(){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>About!</Text>
    </View>
  );
}
function ThemeScreen(){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Theme!</Text>
    </View>
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
              }else if(route.name === "Theme"){
                  iconName = focused ? "apps" : "apps-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'lightseagreen',
            tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name={"DreamCloudEnt"} component={HomeScreen}></Tab.Screen>
        <Tab.Screen name={"About"} component={AboutScreen}></Tab.Screen> 
        <Tab.Screen name={"Theme"} component={ThemeScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
);
}