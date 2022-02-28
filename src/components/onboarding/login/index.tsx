import React from 'react';
import {View,Text,StyleSheet,Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import routes from '../../../assets/routes';

const nameOfUser = 'Aditya Pratap';
const Login = () =>{
    const navigation = useNavigation();
    const onPress = ()=>{
        // navigation.navigate(routes.root.dashboard.NAME,{
        //     name:nameOfUser,
        //     age:20,
        // });
        navigation.navigate(routes.root.dashboard.NAME);
    }
    return(
        <View style = {styles.parent}>
            <Pressable style = {styles.button} onPress={onPress}>
                <Text style = {styles.text}>Login</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    parent:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        padding:15,
        backgroundColor:'skyblue',
        borderRadius:10,
    },
    text:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    }
})

export default Login;