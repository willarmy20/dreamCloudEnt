import React from 'react';
import { SafeAreaView, Text, ImageBackground} from 'react-native';

const About = (props) => {
    return(
        <SafeAreaView style={{flex:1, justifyContent: "center", alignItems: "center"}}>
            <ImageBackground source={require('../assets/menu.png')}
            style={{width: '100%', height: '100%'}}></ImageBackground>
            <Text>About!</Text>
        </SafeAreaView>
    )
}

export default About;