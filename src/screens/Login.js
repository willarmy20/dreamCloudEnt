import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Button } from 'react-native';

const Login = props => {
        return (
            <View style={styles.container}>
                <Image style={styles.dcimg} source={require('../assets/DCLogo.png')} />
                {/* <Text style={styles.greeting}>{`Hello agian.\n Welcome back.`}</Text> */}

                <View style={styles.errorMessage}>
                    <Text>Error</Text>
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput style={styles.input} autoCapitalize="none"></TextInput>
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput style={styles.input} secureTextEntry autoCapitalize="none"></TextInput>
                    </View>

                    <Button onPress={() => {
                            props.navigation.navigate({routeName: 'Home'}) 
                    }}
                    style={styles.button}
                    title="Sign In"
                    >
                              
                    </Button>
                </View>
            </View>
        )
    }


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#b753ef"
    },

    dcimg:{
        height: 250,
        width: 390,
    },

    greeting:{
        marginTop: 32,
        fontSize:18,
        fontWeight: "400",
        textAlign: "center"
    },

    errorMessage:{
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },

    form:{
        marginBottom: 48,
        marginHorizontal: 30,
        marginTop: 80
    },
    inputTitle:{
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: 'uppercase'
    },

    input:{
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F30"
    },

    button: {
        marginHorizontal: 80,
        backgroundColor: "black",
        borderRadius: 4,
        height: 52,
        marginTop: 15, 
        alignItems: "center",
        justifyContent: "center"
    }

})

export default Login;