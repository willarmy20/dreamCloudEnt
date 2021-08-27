import React from 'react';
import { View, Text, StyleSheet, TextInput, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'


const Post = () => {
    const [postMessage, setPostMessage] = React.useState('')

    const onChangeInput =(event =>{
        setPostMessage(event);
    })
    return (
    <>

    <View style={styles.post}>
        <View style={styles.postBox}>
            <Image style={styles.avatar} source={require('../../assets/profile.png')}></Image>
            <TextInput 
            placeholder= 'What is on your mind?' 
            style={styles.input} 
            value={postMessage}
            onChangeText={(e)=> onChangeInput(e)}>

            </TextInput>
        </View>
        <View style={styles.postButtonBox}>
            <View style={styles.postButton}>
            <Text style={{alignContent: 'center', padding: 2}}>
                <Ionicons style={styles.postIcon} name="videocam"  color='purple' />
                <Text style={{fontSize: 14}}> Live Stream</Text>
            </Text>
            </View>
            <View style={styles.postButton}>
                <Text style={{alignContent: 'center', padding: 3}}>
                <Ionicons style={styles.postIcon} name="camera"  color='purple' />
                <Text style={{fontSize: 16}}> Camera</Text>
            </Text>
            </View>
            <View style={styles.postButton3}>
            <Text style={{alignContent: 'center', padding: 2}}>
                <Ionicons style={styles.postIcon} name="pin"  color='purple' />
                <Text style={{fontSize: 16}}> Check-In</Text>
            </Text>
            </View >
        </View>
    
    </View>
    </>
 );
};

const styles = StyleSheet.create({
    post:{
        height: 115,
        width: '110%',
        padding: 15,
        backgroundColor: "white",
        borderWidth: .1,
        marginBottom: 20,
        borderStartWidth: 0,
        borderEndWidth: 0,
        alignContent: "center",

    },
    postBox:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        padding: 6,

        
        width: '100%',
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#f2f2f2',
        height: 40,
        width: '88%',
        borderWidth: .2,
        borderRadius: 15,
        overflow: 'hidden',
    },
    avatar: {
        padding: 20,
        width: 15,
        height: 15,
        borderRadius: 50
    },
    postButtonBox: {
        flexDirection: 'row',
        width: '100%', 
        height: 30,
        marginTop: 5,
        borderWidth: 0,
        borderStartWidth: 0,
        borderEndWidth: 0,
    },
    postButton: {
        alignSelf: 'stretch',
        width: '34%',
        paddingLeft: 15,
        borderWidth: .3,
        borderStartWidth: 0,
    },
    postButton3: {
        alignSelf: 'stretch',
        width: '34%',
        borderWidth: .3,
        paddingLeft: 13,
        borderStartWidth: 0,
        borderEndWidth: 0,
    },
    postIcon: {
        textAlign: 'auto',
        fontSize: 20,
        letterSpacing: 1,
        paddingRight: 15,
    }
});

export default Post;