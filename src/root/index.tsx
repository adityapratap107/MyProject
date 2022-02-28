import React, { createContext, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from '../assets/routes';
import DashboardNavigator from '../components/dashboard/index';
import OnboardingNavigator from '../components/onboarding/index';
import { QueryClient, QueryClientProvider } from 'react-query';

const Stack = createNativeStackNavigator();

export const HeaderColorContext = createContext({
    isGreen: false,
    setIsGreen: (param1: boolean) => { },
});

export const UserNameContext = createContext({
    name: '',
    setName: (param1: string) => { }
});






const Root = () => {
    const [isGreen, setIsGreen] = useState(false);
    const [name, setName] = useState('Aditya');

    // React Query
    const queryClient = new QueryClient();


    return (
        <QueryClientProvider client={queryClient}>
            <HeaderColorContext.Provider value={{ isGreen, setIsGreen }}>
                <UserNameContext.Provider value={{ name, setName }}>
                    <NavigationContainer>
                        <Stack.Navigator initialRouteName={routes.root.onboarding.NAME} screenOptions={{ headerShown: false }}>
                            <Stack.Screen name={routes.root.onboarding.NAME} component={OnboardingNavigator} />
                            <Stack.Screen name={routes.root.dashboard.NAME} component={DashboardNavigator} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </UserNameContext.Provider>
            </HeaderColorContext.Provider>
        </QueryClientProvider>
    );
}

export default Root;