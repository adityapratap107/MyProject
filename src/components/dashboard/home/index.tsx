import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Header from '../../common/header';
import { StyleSheet } from 'react-native';
import { Pressable } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Image } from 'react-native';


const Home = () => {

    const [imgUri, setImgUri] = useState('image');

    const openImageLibrary = () => {
        const options = {
            title: 'Select Image',
            customButtons: [
                {
                    name: 'click me',
                    title: 'Choose file from custom option'
                },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images'
            },
        };


        launchImageLibrary(options, response => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorCode)
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = response.assets[0].uri;
                setImgUri(source);
                console.log(source)
            }
        })
    }

    const openCamera = async () => {

        const options = {
            title: 'Select Image',
            // customButtons: [
            //     {
            //         name: 'click me',
            //         title: 'Choose file from custom option'
            //     },
            // ],
            storageOptions: {
                skipBackup: true,
                mediaType: 'photo',
                path: 'images',
                // maxHeight: 200,
                // maxWidth: 200,
                saveToPhotos: true,
            },
            includeBase64: false,
        };




        launchCamera(options, response => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorCode)
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                // const source = { uri: 'data:image/jpeg;base64,' + response.base64 };
                // setImageUri(source);
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                const source = response.assets[0].uri;
                setImgUri(source);
                console.log(source)
            }
        })
    }

    return (
        <View style={styles.parent}>
            <Header title={'Home'} />
            <View style={styles.container}>

                <Image
                    source={{ uri: imgUri }}
                    style={{ height: 100, width: 100, borderRadius: 100, borderWidth: 2, borderColor: 'grey' }} />
                <Pressable style={styles.button1} onPress={openImageLibrary}>
                    <Text style={styles.text}>Select Image</Text>
                </Pressable>

                <Pressable style={styles.button2} onPress={openCamera}>
                    <Text style={styles.text}>Launch Camera</Text>
                </Pressable>



            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button1: {
        borderRadius: 15,
        backgroundColor: 'green',
        padding: 10,
    },
    button2: {
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: 'red',
        padding: 10,
    },
    button3: {
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: 'grey',
        padding: 10,
    },
    text: {
        fontSize: 15,
        color: 'white'
    }
})

export default Home;