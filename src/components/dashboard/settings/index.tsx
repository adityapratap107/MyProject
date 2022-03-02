import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Header from '../../common/header';
import DatePicker from 'react-native-date-picker';
import { Platform } from 'react-native';
import { useQueryClient } from 'react-query';


const Settings = () => {
    const [count, setCount] = useState(0);
    const [counts, setCounts] = useState(0);


    const queryClient = useQueryClient();
    queryClient.refetchQueries({ queryKey: 'post2' })


    const onPress1 = () => {
        setCount(count + 1);
    }

    const onPress2 = () => {
        setCounts(counts + 1);
    }

    // works like a constructor function
    // useEffect(()=>{
    //   alert("I am clicked");
    // },[counts]);



    // DATE PICKER 

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false);

    // var now = new Date();
    // var date1 = now.getDate();   // current Date
    // var month = now.getMonth()+1;  // current Month
    // var year = now.getFullYear();  // current Year
    // var day = now.getDay();  // current day
    // var hours = now.getHours();  // current Hours
    // var minutes = now.getMinutes(); // current Minutes
    // var seconds = now.getSeconds();  // current Seconds


    // var weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    // var currday = weekday[day]; 




    const goToDatePicker = () => {
        setOpen(true)
    }

    const onDateChange = (event, selectedDate) => {
        console.log("Hello")
        const currDate = selectedDate || date;
        setOpen(Platform.OS == 'android')
        setDate(currDate)

        let tempDate = new Date(currDate)
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = 'Hours: ' + tempDate.getHours() + '| Minutes: ' + tempDate.getMinutes();
        console.log(fDate + fTime);
    }

    return (
        <View style={styles.parent}>
            <Header title={'Settings'} />
            <View style={styles.container1}>
                <Pressable onPress={onPress1} style={styles.button1}>
                    <Text style={styles.text}>Increment Count {count}</Text>
                </Pressable>
            </View>

            <View style={styles.container2}>
                <Pressable onPress={onPress2} style={styles.button2}>
                    <Text style={styles.text}>Increment Count {counts}</Text>
                </Pressable>

                <Pressable style={styles.datestyle} onPress={goToDatePicker}>
                    <Text style={styles.text}>DATE PICKER</Text>
                </Pressable>


                <DatePicker
                    modal    // default value of model false
                    open={open}
                    date={date}
                    textColor='red'
                    locale='en'              // change the local language 
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                        // console.log(Date.toString())

                    }}
                    placeholder='Enter value'
                    title={'Date Time Picker'}
                    confirmText={false}
                    onDateChange={onDateChange}
                    onCancel={() => {
                        setOpen(true)
                    }}
                />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        flex: 1
    },
    container1: {
        flex: 1,
        // justifyContent:'center',
        alignItems: 'center'
    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button1: {
        marginTop: 100,
        backgroundColor: 'green',
        borderRadius: 10,
        padding: 10
    },
    button2: {
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 10
    },
    datestyle: {
        marginTop: 10,
        backgroundColor: 'skyblue',
        borderRadius: 10,
        padding: 10
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    textcount: {
        color: 'black',
        fontSize: 30,
    }
})

export default Settings;