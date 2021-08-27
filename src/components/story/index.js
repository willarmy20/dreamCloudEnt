import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView,ImageBackground} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'


const Story = () => {


    return (
    <>
    <View style={styles.story}>
        <ScrollView 
        horizontal
        style={styles.storyHolder}
        >
            <View style={styles.storyPanel}>
                <ImageBackground source={require('../../assets/story.png')}
                style={{flex: 0, width: '100%', height: '100%', justifyContent: 'flex-start', borderRadius: 25, overflow: 'hidden'}}>  
                <Image style={styles.avatar} source={require('../../assets/profile.png')}></Image>
                <Text style={{marginTop: 150, color: 'white', marginStart: 5}}>Add to Story ...</Text>
                </ImageBackground>
                
            </View>
            <View style={styles.storyPanel}>
            <ImageBackground source={require('../../assets/postpic3.png')}
             style={{flex: 0, width: '100%', height: '100%', justifyContent: 'flex-start', borderRadius: 25, overflow: 'hidden'}}>  
               <Image style={styles.avatar} source={require('../../assets/profilepic2.png')}></Image>
               <Text style={{marginTop: 150, color: 'white', marginStart: 5}}>ProfileName</Text>
             </ImageBackground>
             
            </View>
            <View style={styles.storyPanel}>
            <ImageBackground source={require('../../assets/postpic2.png')}
             style={{flex: 0, width: '100%', height: '100%', justifyContent: 'flex-start', borderRadius: 25, overflow: 'hidden'}}>  
               <Image style={styles.avatar} source={require('../../assets/profilepic4.png')}></Image>
               <Text style={{marginTop: 150, color: 'white', marginStart: 5}}>Profile Name</Text>
             </ImageBackground>
            

            </View>


        </ScrollView>
    
    </View>
 </>
 );
};

const styles = StyleSheet.create({
    story:{
        height: 315,
        width: '110%',
        padding: 25,
        backgroundColor: "white",
        borderWidth: .1,
        marginBottom: 20,
        borderStartWidth: 0,
        borderEndWidth: 0,
        alignContent: "center",

    },
    storyHolder: {
        flexDirection: "row",
        height: '95%',
        width: '110%',
        alignSelf: 'auto',
        borderRadius: 10,
        backgroundColor: "white"
    },
    storyPanel: {
        height: '95%',
        width: 180,
        borderRadius:30,
        marginRight: 20,
        alignSelf: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: "white",
    },
    avatar: {
        padding: 20,
        margin: 10,
        width: 15,
        height: 15,
        borderRadius: 50,
        
    }
});

export default Story;