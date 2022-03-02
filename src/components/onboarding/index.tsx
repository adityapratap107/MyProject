import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from '../../assets/routes';
import Login from '../onboarding/login';
import ForgotPassword from '../onboarding/forgotPassword';
import SignIn from '../onboarding/signIn';
import Query from '../onboarding/query';

const Stack = createNativeStackNavigator();

const OnboardingNavigator = () => {

    return (
        <Stack.Navigator initialRouteName={routes.root.onboarding.login.NAME} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={routes.root.onboarding.login.NAME} component={Login} />
            <Stack.Screen name={routes.root.onboarding.forgotPassword.NAME} component={ForgotPassword} />
            <Stack.Screen name={routes.root.onboarding.signIn.NAME} component={SignIn} />
            <Stack.Screen name={routes.root.onboarding.query.NAME} component={Query} />
        </Stack.Navigator>
    );
}


export default OnboardingNavigator;