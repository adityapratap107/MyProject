import React from 'react'
import { View, Text } from 'react-native';
import Header from '../../common/header';
import { useQuery } from 'react-query';
import { Button } from 'react-native';

const Cart = () => {

    // useQuery take 2 parameters i.e first key and second function
    // const { data, isError, isLoading, isSuccess, refetch, isIdle } = useQuery('post1', () =>
    //     fetch('https://jsonplaceholder.typicode.com/posts/3').then(async (res) => {
    //         await res.json()
    //         if (!res.ok) {
    //             const error = res.status;
    //             console.log('Get the Error code', error);
    //             return Promise.reject(error);
    //         } else {
    //             console.log('Status code ', res.status)
    //         }
    //     }).catch(error => {
    //         console.log("There was an error!!!!")
    //     }),
    //     {
    //         onError: () => {
    //             console.log("error occurs")
    //         },
    //         onSettled: () => {
    //             console.log('api called settled')
    //         },
    //         onSuccess: () => {
    //             console.log('got the response')
    //         },
    //         cacheTime: 

    //     }
    // );

    // console.log('data', data, isLoading, isError, isSuccess, isIdle);





    const { data, dataUpdatedAt, isError, errorUpdatedAt, failureCount, isLoading, isLoadingError, isSuccess, isFetched, isFetching, refetch, isIdle, isPlaceholderData, isPreviousData, isRefetching, isStale, status, remove } = useQuery('newkey1', () =>
        fetch('https://jsonplaceholder.typicode.com/todos/13').then((res) => res.json()),
        {
            onError: () => {
                console.log("error occurs")
            },
            onSettled: () => {
                console.log('api called settled')
            },
            onSuccess: () => {
                console.log('got the response')
            },
            cacheTime: 5000,
            initialData: () => {
                console.log('Initial Data printed!!')
            },
            initialDataUpdatedAt: () => {
                console.log('Initial Data Updated at:')
            },
            // placeholderData: 'Placeholder here!!',
            // refetchInterval: 10000,
            // isDataEqual:,
            refetchOnWindowFocus: () => {
                console.log('Refetch on windows focus')
            },
            staleTime: 5000,      // after 5 sec it will again fetch the data


        }
    );
    console.log(
        'data', data,
        ' dataUpdatedAt:', dataUpdatedAt,
        ' isLoading:', isLoading,
        // ' isLoadingError:', isLoadingError,
        ' isError:', isError,
        ' errorUpdatedAt:', errorUpdatedAt,
        ' Failure Count:', failureCount,
        ' isFetched:', isFetched,
        ' isFetching:', isFetching,
        ' isRefetching:', isRefetching,
        ' isIdle:', isIdle,
        ' isPlaceholderData:', isPlaceholderData,
        ' isPreviousData:', isPreviousData,
        ' isStale:', isStale,
        ' isSuccess:', isSuccess,
        // ' remove:', remove,
        ' status:', status,
    );


    return (
        <View>
            <Header title={'Cart'} />
            <View>
                {
                    isLoading ? (
                        <Text>Loading the data...</Text>
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