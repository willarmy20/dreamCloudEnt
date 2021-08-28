import React from 'react';
import { SafeAreaView, Text, ImageBackground } from 'react-native';



const Templates = (props) => {
    return(
        <SafeAreaView style={{flex:1, justifyContent: "center", alignItems: "center"}}>
            <ImageBackground source={require('../assets/templates.png')}
             style={{width: '100%', height: '100%'}}></ImageBackground>
            <Text>Templates!</Text>
        </SafeAreaView>
    )
}

export default Templates;
