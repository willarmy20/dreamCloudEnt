import React, {Component, useState} from 'react';
import { View, StyleSheet } from 'react-native';
import Navigation from './src/components/Navigation';
import Login from './src/screens/Login';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'; 
import DreamNavigatior from './src/navigation/DreamNavigatior';

const fetchFonts = () => {
  
  return Font.loadAsync({
    'opens-sans' : require('./src/assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./src/assets/fonts/OpenSans-Bold.ttf')
  })
}



const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading 
      startAsync={fetchFonts} 
      onFinish={() => setFontLoaded(true)}
      onError={(err) => console.log(err)}
      />
    );
  }
  return (
   <DreamNavigatior/>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: 60
  },
});

export default App;