import React,{useState,useContext} from 'react';
import {View,Text,StyleSheet,Pressable,TextInput} from 'react-native';
import {HeaderColorContext,UserNameContext} from '../../../root';

const Header = ({title}:{title:string}) =>{
    // const [isGreen,SetIsGreen] = useState(false);
    // const onPress = () =>{
    //     SetIsGreen(!isGreen);
    // }

    const {isGreen,setIsGreen} = useContext(HeaderColorContext);
    const {name,setName} = useContext(UserNameContext);
    const onPress = ()=>{
        setIsGreen(!isGreen);
    };

    const onChangeText = (text:string)=>{
        setName(text);
    }

    return(
        <View style = {styles.parent}>
            <Pressable onPress={onPress}>
                <TextInput style={isGreen ? styles.textgreen : styles.text} placeholder = 'Enter value' onChangeText={onChangeText} value={name}/>
                <Text style={isGreen ? styles.textgreen : styles.text}>{title}</Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    parent:{
        // justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:30,
        color:'grey'
    },
    textgreen:{
        fontSize:30,
        color:'green'
    }
})

export default Header;