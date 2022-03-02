import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import routes from '../../../assets/routes';

const nameOfUser = 'Aditya Pratap';
const Login = () => {
    const navigation = useNavigation();
    const onPress1 = () => {
        // navigation.navigate(routes.root.dashboard.NAME,{
        //     name:nameOfUser,
        //     age:20,
        // });
        navigation.navigate(routes.root.dashboard.NAME);
    }

    const onPress2 = () => {
        navigation.navigate(routes.root.onboarding.signIn.NAME);
    }

    const onPress3 = () => {
        navigation.navigate(routes.root.onboarding.query.NAME);
    }
    return (
        <View style={styles.parent}>
            <Pressable style={styles.button1} onPress={onPress1}>
                <Text style={styles.text}>Login</Text>
            </Pressable>

            <Pressable style={styles.button2} onPress={onPress2}>
                <Text style={styles.text}>Sign In</Text>
            </Pressable>

            <Pressable style={styles.button3} onPress={onPress3}>
                <Text style={styles.text}>Query</Text>
            </Pressable>


        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button1: {
        padding: 15,
        backgroundColor: '#125dff',
        borderRadius: 10,
    },
    button2: {
        marginTop: 10,
        padding: 15,
        backgroundColor: '#125dff',
        borderRadius: 10,
    },
    button3: {
        marginTop: 10,
        padding: 15,
        backgroundColor: '#125dff',
        borderRadius: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default Login;