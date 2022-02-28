import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Platform } from 'react-native';
import Header from '../../common/header';
import { UserContext, EmployeeContext } from '..';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
    const { user: { age }, setUser } = useContext(UserContext);
    const { employee, setEmployee } = useContext(EmployeeContext);



    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState('date');
    const [open, setOpen] = useState(false);
    const [text1, setText1] = useState('Empty');
    const [text2, setText2] = useState('Empty');



    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setOpen(Platform.OS == 'android');
        setDate(currentDate);

        let tempDate = new Date(currentDate)
        let fDate1 = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fDate2 = tempDate.getDate() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getFullYear();
        let fTime1 = 'Hours: ' + tempDate.getHours() + '| Minutes: ' + tempDate.getMinutes();
        let fTime2 = 'Hours: ' + tempDate.getHours() + '| Minutes: ' + tempDate.getMinutes();
        setText1(fDate1 + '\n' + fTime1)
        setText2(fDate2 + '\n' + fTime2)
        console.log(fDate1 + '(' + fTime1 + ')');
        console.log(fDate2 + '(' + fTime2 + ')');
        if (event.type === 'neutralButtonPressed') {
            console.log('Clear date value')

        }
        console.log(Date.toString());
    }

    const showMode = (currentMode: string) => {
        setOpen(true);
        setMode(currentMode);
    }



    // async storage
    const storeData = async (key, value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
        } catch (e) {
            // saving error
        }
    }


    const getData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key)
            if (value !== null) {
                // value previously stored
                // console.log(value);
            }
            console.log(value);
        } catch (e) {
            // error reading value
        }
    }

    getData('id')       // persistent value ---  saved!!
    storeData('id', 20)
    getData('id')

    storeData('user', {
        name: 'Aditya',
        id: 1
    });

    getData('user');

    storeData('user', {
        name: 'Abhishek',
        id: 2
    });
    getData('user');




    return (
        <View style={styles.parent}>
            <Header title={'Profile'} />
            {/* <Text>Age of the user is {age}</Text>
            <Text>Name of the employee is {employee.emp_name}</Text>
            <Text>ID of the employee is {employee.emp_id}</Text> */}

            <Text style={styles.text}>{text1}</Text>
            <Text style={styles.text}>{text2}</Text>
            <View style={styles.container}>
                <Button title='DatePicker' onPress={() => showMode('date')} />
            </View>
            <View style={styles.container}>
                <Button title='TimePicker' onPress={() => showMode('time')} />
            </View>

            {open && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={false}
                    maximumDate={new Date()}
                    minimumDate={new Date(2021, 11, 1)}
                    //dayOfWeekFormat={'{dayofweek.abbreviated(3)}'}   // work only in windows
                    /* timeZoneOffsetInMinutes={60}  // by default it uses device timezone */
                    display="spinner"      // spinner, calendar, clock
                    minuteInterval={10}    // select minute between interval of 10
                    neutralButtonLabel="clear"
                    style={{ flex: 1 }}
                    themeVariant='dark'   // works in ios only
                    androidVariant='nativeAndroid'      // nativeAndroid or iosClone
                    onChange={onChange}
                />
            )}

        </View>

    )
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default Profile;