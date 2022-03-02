import React, { useState } from 'react'
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput, TouchableOpacity } from 'react-native';

const SignIn = () => {

    const [data, setData] = useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
    })

    const textInputChange = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    }


    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        })
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../../../assets/images/reactlogo.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
                <Text style={styles.text1}>Sign In</Text>
            </View>

            <View style={styles.body}>

                <Text style={styles.text_body}>Email</Text>
                <View style={styles.action}>
                    <Ionicons name='person' size={20} color={'grey'} />
                    <TextInput
                        placeholder="Your Email"
                        style={styles.textInput}
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {
                        data.check_textInputChange ?
                            <Ionicons name='checkmark-circle' size={20} color={'green'} />
                            : null
                    }

                </View>

                <Text style={styles.text_body}>Password</Text>
                <View style={styles.action}>
                    <Ionicons name='lock-closed' size={20} color={'grey'} />
                    <TextInput
                        placeholder="Your password"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {
                            data.secureTextEntry ?
                                <Ionicons name='eye-off' size={20} color={'grey'} />
                                : <Ionicons name='eye' size={20} color={'grey'} />
                        }
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Signin</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.footer}>
                <Text>app footer @copyright ✔</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0da882'
    },
    header: {
        flex: 0.4,
        alignItems: 'center',
        // padding: 40,
        backgroundColor: '#0da882',
    },
    logo: {
        marginTop: 50,
        height: 100,
        width: 100
    },
    text1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    body: {
        borderRadius: 20,
        flex: 1,
        backgroundColor: '#f0e3b1',
    },
    text_body: {
        padding: 20,
        fontSize: 20,

    },
    textInput: {
        flex: 1,
        marginTop: -11
    },
    action: {
        marginLeft: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        // marginTop: 10
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        // paddingBottom: -10
    },
    button: {
        backgroundColor: '#0da882',
        padding: 10,
        width: 100,
        marginLeft: 140,
        borderRadius: 5,
        marginTop: 50

    },
    textButton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    },

    footer: {
        // backgroundColor: 'red',
        // flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10
    },

})

export default SignIn;