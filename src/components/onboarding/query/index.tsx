import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native';
import { Pressable } from 'react-native';
import { useQuery, useMutation } from 'react-query';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const POSTS = '/posts';

const Query = () => {

    // const [postResponse, setPostResponse] = useState();

    // const callApi = async () => {
    //     const response = await fetch(BASE_URL + POSTS);
    //     const responseJson = await response.json();
    //     setPostResponse(JSON.stringify(responseJson));
    // }

    // useEffect(() => {
    //     callApi();
    // }, [])


    // Queries are used when we go to home page of instagram i.e automatically refetch the queries
    const { data, refetch } = useQuery('posts2', () =>
        fetch(BASE_URL + POSTS).then((res) => res.json())
    )

    const onPressFetch = () => {
        refetch();
    }


    // Mutations are used when we change the data ....... login in instagram a new session is created
    // const { data, mutate } = useMutation('login', () =>
    //     fetch(BASE_URL + POSTS).then((res) => res.json())
    // )

    // const onPressLogin = () => {
    //     mutate();
    // }

    return (
        <View>
            {/* <Pressable onPress={onPressLogin}>
                <Text>Login</Text>
            </Pressable> */}
            <Pressable onPress={onPressFetch}>
                <Text>Refetch Data</Text>
            </Pressable>
            <Text>{JSON.stringify(data)}</Text>
        </View>

    )
}

export default Query;