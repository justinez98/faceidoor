import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/home/home';
import Status from './components/status/status.js';
import Contact from './components/contact/contact.js';
import History from './components/history/history.js';
import Profile from './components/profile/profile.js';



const Tab = createBottomTabNavigator();

export default class HomeStack extends Component {
render(){
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#fff',
                inactiveTintColor: 'gray',
                activeBackgroundColor: '#0C2C43'
            }}
            initialRouteName="home"
        >
            <Tab.Screen name="status"
                component={Status}
            />
            <Tab.Screen name="contact"
                component={Contact}
            />

            <Tab.Screen name="home"
                component={Home}
            />
            <Tab.Screen name="history"
                component={History}
            />
            <Tab.Screen name="profile"
                component={Profile}
            />

        </Tab.Navigator>
  );
}
  
}