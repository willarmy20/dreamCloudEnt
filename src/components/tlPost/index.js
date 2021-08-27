import React from 'react';
import { View, Text, StyleSheet, TextInput, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'


const TlPost = () => {
    const [commentMessage, setCommentMessage] = React.useState('')

    const onChangeInput =(event =>{
        setCommentMessage(event);
    })
    return (
    <>

    <View style={styles.post}>
        <View style={styles.tlpost}>
            <View style={styles.tlpostTop}>
                <Image style={styles.avatar} source={require('../../assets/profile.png')}></Image>
                <View >
                    <Text>Profile Name</Text>
                    <Text>3 hrs ago</Text>
                </View>
                <Ionicons style={styles.postIcon} name="ellipsis-horizontal"  color='purple' />
            </View>
            <View>
                <Text style={{margin: 10}}>Today we began a journey bigger than all of us , today we dreamed of summers on the horizons and blue moons by the bay. </Text>
                <Image source={require('../../assets/story.png')} style={{width: '95%', height: '70%', margin: 10}}/>
            </View>
        </View>
        <View style={styles.tlpostIcon}>
            <Ionicons style={styles.tlpostIcons} name="thumbs-up"  color='purple' />
            <Ionicons style={styles.tlpostIcons} name="heart"  color='purple' />
            <Ionicons style={styles.tlpostIcons} name="happy"  color='purple' />
            <Ionicons style={styles.tlpostIcons} name="sad"  color='purple' />
            <Ionicons style={styles.tlpostIcons} name="alert"  color='purple' />
            <Ionicons style={styles.tlpostIcons} name="list"  color='purple' />
            <Text>5 Comments</Text>
            <Ionicons style={styles.tlpostIcons} name="share"  color='purple' />
            <Text>Share</Text>
        </View>
        <View style={styles.postBox}>
            <Image style={styles.avatar2} source={require('../../assets/profile.png')}></Image>
            <TextInput 
            placeholder= 'Comment..' 
            style={styles.input} 
            value={commentMessage}
            onChangeText={(e)=> onChangeInput(e)}>

            </TextInput>
        </View>
    </View>
    <View style={styles.post}>
        <View style={styles.tlpost}>
            <View style={styles.tlpostTop}>
                <Image style={styles.avatar} source={require('../../assets/profilepic2.png')}></Image>
                <View >
                    <Text>Jerry</Text>
                    <Text>5 hrs ago</Text>
                </View>
                <Ionicons style={styles.postIcon} name="ellipsis-horizontal"  color='purple' />
            </View>
            <View>
                <Text style={{margin: 10}}>Today we began a journey bigger than all of us , today we dreamed of summers on the horizons and blue moons by the bay. </Text>
                <Image source={require('../../assets/postpic2.png')} style={{width: '95%', height: '70%', margin: 10}}/>
            </View>
        </View>
        <View style={styles.tlpostIcon}>
            <Ionicons style={styles.tlpostIcons} name="thumbs-up"  color='purple' />
            <Ionicons style={styles.tlpostIcons} name="heart"  color='purple' />
            <Ionicons style={styles.tlpostIcons} name="happy"  color='purple' />
            <Ionicons style={styles.tlpostIcons} name="sad"  color='purple' />
            <Ionicons style={styles.tlpostIcons} name="alert"  color='purple' />
            <Ionicons style={styles.tlpostIcons} name="list"  color='purple' />
            <Text>5 Comments</Text>
            <Ionicons style={styles.tlpostIcons} name="share"  color='purple' />
            <Text>Share</Text>
        </View>
        <View style={styles.postBox}>
            <Image style={styles.avatar2} source={require('../../assets/profile.png')}></Image>
            <TextInput 
            placeholder= 'Comment..' 
            style={styles.input} 
            value={commentMessage}
            onChangeText={(e)=> onChangeInput(e)}>

            </TextInput>
        </View>
    </View>
    <View style={styles.post}>
        <View style={styles.tlpost}>
            <View style={styles.tlpostTop}>
                <Image style={styles.avatar} source={require('../../assets/profilepic4.png')}></Image>
                <View >
                    <Text>Lena</Text>
                    <Text>3 hrs ago</Text>
                </View>
                <Ionicons style={styles.postIcon} name="ellipsis-horizontal"  color='purple' />
            </View>
            <View>
                <Text style={{margin: 10}}>Today we began a journey bigger than all of us , today we dreamed of summers on the horizons and blue moons by the bay. </Text>
                <Image source={require('../../assets/postpic5.png')} style={{width: '95%', height: '70%', margin: 10}}/>
            </View>
        </View>
        <View style={styles.tlpostIcon}>
            <Ionicons style={styles.tlpostIcons} name="thumbs-up"  color='purple' />
            <Ionicons style={styles.tlpostIcons} name="heart"  color='purple' />
            <Ionicons style={styles.tlpostIcons} name="happy"  color='purple' />
            <Ionicons style={styles.tlpostIcons} name="sad"  color='purple' />
            <Ionicons style={styles.tlpostIcons} name="alert"  color='purple' />
            <Ionicons style={styles.tlpostIcons} name="list"  color='purple' />
            <Text>5 Comments</Text>
            <Ionicons style={styles.tlpostIcons} name="share"  color='purple' />
            <Text>Share</Text>
        </View>
        <View style={styles.postBox}>
            <Image style={styles.avatar2} source={require('../../assets/profile.png')}></Image>
            <TextInput 
            placeholder= 'Comment..' 
            style={styles.input} 
            value={commentMessage}
            onChangeText={(e)=> onChangeInput(e)}>

            </TextInput>
        </View>
    </View>
    </>
 );
};

const styles = StyleSheet.create({
    post:{
        height: 560,
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
        marginTop:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        padding: 6,

        
        width: '100%',
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#f2f2f2',
        height: 35,
        width: '88%',
        borderWidth: .2,
        borderRadius: 15,
        overflow: 'hidden',
    },
    avatar: {
        padding: 20,
        width: 15,
        height: 15,
        margin : 5,
        borderRadius: 50
    },
    avatar2: {
        padding: 20,
        width: 10,
        height: 24,
        margin : 5,
        borderRadius: 50
    },
    
    postIcon: {
        textAlign: 'auto',
        fontSize: 20,
        letterSpacing: 1,
        marginStart: 230,
    },
    tlpost: {
        height: 430,
        width: '100%', 
        backgroundColor: 'white',
      
    },
    tlpostTop: {
        flexDirection: 'row',
    },
    tlpostIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 15,
        marginBottom: 5,
        marginTop:3,
        height: 20,
    },
    tlpostIcons: {
        fontSize: 18,
    }


});

export default TlPost;