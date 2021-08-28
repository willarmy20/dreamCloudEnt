import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navigation from './src/components/Navigation';
import Login from './src/screens/Login';



const App = () => {
  return (
    <View style={styles.container}>
      <Login />
      {/* <Navigation /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: 60
  },
});

export default App;