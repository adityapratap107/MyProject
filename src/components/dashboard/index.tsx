import React, { createContext, useContext, useState } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from '../../assets/routes';
import Home from './home';
import Settings from './settings';
import Cart from './cart'
import Profile from './profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NewUser, InitialUser } from '../../services/models/newuser';
import { Employee, firstEmployee } from '../../services/models/employee';

const Tab = createBottomTabNavigator();


export const UserContext = createContext({
    user: InitialUser,
    setUser: (param1: NewUser) => { }
});

export const EmployeeContext = createContext({
    employee: firstEmployee,
    setEmployee: (param1: Employee) => { }
})

const DashboardNavigator = (props) => {
    // console.log(props.route.params.name);
    // console.log(props.route.params.age);

    const [user, setUser] = useState(InitialUser);
    const [employee, setEmployee] = useState(firstEmployee);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <EmployeeContext.Provider value={{ employee, setEmployee }}>
                <Tab.Navigator screenOptions={
                    ({ route }) => ({
                        tabBarIcon: ({ focused, size, color }) => {
                            let iconName;
                            if (route.name == routes.root.dashboard.tabs.home.NAME) {
                                iconName = focused ? 'home' : 'home-outline'
                            }
                            else if (route.name == routes.root.dashboard.tabs.settings.NAME) {
                                iconName = focused ? 'settings' : 'settings-outline'
                            }
                            else if (route.name == routes.root.dashboard.tabs.cart.NAME) {
                                iconName = focused ? 'cart' : 'cart-outline'
                            }
                            else if (route.name == routes.root.dashboard.tabs.profile.NAME) {
                                iconName = focused ? 'person' : 'person-outline'
                            }
                            return <Ionicons name={iconName} size={size} color={color} />
                        },
                        tabBarActiveTintColor: 'skyblue',
                        tabBarInactiveTintColor: 'grey'
                    })
                }>
                    <Tab.Screen name={routes.root.dashboard.tabs.home.NAME} component={Home} options={{ title: 'Home' }} />
                    <Tab.Screen name={routes.root.dashboard.tabs.settings.NAME} component={Settings} options={{ title: 'Settings' }} />
                    <Tab.Screen name={routes.root.dashboard.tabs.cart.NAME} component={Cart} options={{ title: 'Cart' }} />
                    <Tab.Screen name={routes.root.dashboard.tabs.profile.NAME} component={Profile} options={{ title: 'Profile' }} />
                </Tab.Navigator>
            </EmployeeContext.Provider>
        </UserContext.Provider>

    );
}

export default DashboardNavigator;