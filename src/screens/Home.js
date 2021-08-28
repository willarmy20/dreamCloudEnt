import React from 'react';
import { SafeAreaView, Text, ImageBackground, ScrollView} from 'react-native';
import Post from '../components/post'
import Story from '../components/story'
import TlPost from '../components/tlPost'



const Home = (props) => {
    return(
        <ScrollView>
        <SafeAreaView style={{flex:1, justifyContent: "flex-start", alignItems: "center", borderWidth: .6}}>

           <Post />
            <Story />
            <TlPost />
            
                <Text>Home Screen</Text>        
     
           
            
        </SafeAreaView>
        </ScrollView>
    )
}

export default Home;

