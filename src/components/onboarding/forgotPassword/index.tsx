import React from 'react';
import {View,Text,Pressable,StyleSheet} from 'react-native';
import {BASE_URL,POST,COMMENT,ALBUM,PHOTO,TODO,USER} from '../../../services/endpoints';
import Post from '../../../services/models/post';
import Comment from '../../../services/models/comment';
import Album from '../../../services/models/album';
import Photo from '../../../services/models/photo';
import Todo from '../../../services/models/todo';
import {User,Geo,Address,Company} from '../../../services/models/user';


const ForgotPassword = () =>{

    const goToPost = async()=>{
        const response = await fetch(BASE_URL+POST);
        const responseJson:Post[] = await response.json();
        console.log(responseJson[1].id);
    }
    const goToComment = async()=>{
        const response = await fetch(BASE_URL+COMMENT);
        const responseJson:Comment[] = await response.json();
        console.log(responseJson[3].email)
    }
    const goToAlbum = async()=>{
        const response = await fetch(BASE_URL+ALBUM);
        const responseJson:Album[] = await response.json();
        console.log(responseJson[2].userId);
    }
    const goToPhoto = async()=>{
        const response = await fetch(BASE_URL+PHOTO);
        const responseJson:Photo[] = await response.json();
        console.log(responseJson[3].thumbnailUrl);
    }
    const goToTodo = async()=>{
        const response = await fetch(BASE_URL+TODO);
        const responseJson:Todo[] = await response.json();
        console.log(responseJson[5].completed);
    }
    
    const goToUser = async()=>{
        const response = await fetch(BASE_URL+USER);
        const responseJson:User[] = await response.json();
        console.log(responseJson[2].website);
    }
    


    return(
        <View style={styles.parent}>
            <View>
                <Text style={styles.headerText}>SERVICES</Text>
            </View>
            <Pressable style={styles.postbtn} onPress={goToPost}>
                <Text style={styles.text}>POST API</Text>
            </Pressable>
            <Pressable style={styles.commentbtn} onPress={goToComment}>
                <Text style={styles.text}>COMMENT API</Text>
            </Pressable>
            <Pressable style={styles.albumbtn} onPress={goToAlbum}>
                <Text style={styles.text}>ALBUMS API</Text>
            </Pressable>
            <Pressable style={styles.photobtn} onPress={goToPhoto}>
                <Text style={styles.text}>PHOTOS API</Text>
            </Pressable>
            <Pressable style={styles.todobtn} onPress={goToTodo}>
                <Text style={styles.text}>TODOS API</Text>
            </Pressable>
            <Pressable style={styles.userbtn} onPress={goToUser}>
                <Text style={styles.text}>USERS API</Text>
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
    headerText:{
        fontSize:40,
        marginBottom:40,
        color:'grey'
    },
    postbtn:{
        borderRadius:10,
        backgroundColor:'red',
        padding:15,
    },
    commentbtn:{
        marginTop:10,
        borderRadius:10,
        backgroundColor:'green',
        padding:15,
    },
    albumbtn:{
        marginTop:10,
        borderRadius:10,
        backgroundColor:'skyblue',
        padding:15,
    },
    photobtn:{
        marginTop:10,
        borderRadius:10,
        backgroundColor:'grey',
        padding:15,
    },
    todobtn:{
        marginTop:10,
        borderRadius:10,
        backgroundColor:'yellow',
        padding:15,
    },
    userbtn:{
        marginTop:10,
        borderRadius:10,
        backgroundColor:'black',
        padding:15,
    },
    text:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    }
})

export default ForgotPassword;