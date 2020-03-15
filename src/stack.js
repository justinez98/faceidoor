import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'native-base';
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
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
  
              let iconName;
              let colors;
            if (route.name === 'home') {
              iconName = 'home'
            }else if(route.name === 'status'){
                iconName = 'insert-chart'
            }
            else if(route.name === 'contact'){
                iconName = 'people'
            }
            else if(route.name === 'history'){
                iconName = 'history'
            }
            else if(route.name === 'profile'){
                iconName = 'face'
            }
            if(focused){
               colors="#fff"
            }else{
                colors="#000"
            }
  
              // You can return any component that you like here!
              return <Icon type="MaterialIcons" name={iconName} size={size} style={{color:colors}} />;
            },
          })}
            tabBarOptions={{
                activeTintColor: '#fff',
                inactiveTintColor: 'gray',
                activeBackgroundColor: '#135B8E',
                inactiveBackgroundColor:'#0C2C43'
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