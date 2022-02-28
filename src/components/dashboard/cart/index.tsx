import React from 'react'
import { View, Text } from 'react-native';
import Header from '../../common/header';
import { useQuery } from 'react-query';
import { Button } from 'react-native';

const Cart = () => {

    // useQuery take 2 parameters i.e first key and second function
    const { data, isError, isLoading, isSuccess, refetch } = useQuery('todos4', () =>
        fetch('https://jsonplaceholder.typicode.com/todos/2').then((res) => res.json()),
        {
            onError: () => {
                console.log("error occurs")
            },
            onSettled: () => {
                console.log('api called settled')
            },
            onSuccess: () => {
                console.log('got the response')
            }
        }
    );

    console.log('data', data, isLoading, isError, isSuccess);

    return (
        <View>
            <Header title={'Cart'} />
            <View>
                {
                    isLoading ? (
                        <Text>Loading the data</Text>
                    ) : isError ? (
                        <Text>Error occured</Text>
                    ) : (
                                <Text>got the data: {JSON.stringify(data)}</Text>
                            )
                }
                <Button title='Refetch data' onPress={() => refetch()} />
            </View>
        </View>
    );
}

export default Cart;