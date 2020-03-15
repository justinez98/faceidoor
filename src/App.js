
import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/login/login'
import HomeStack from './stack'



const Stack = createStackNavigator();



class App extends Component{
   


  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator 
        >
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
          <Stack.Screen name="home" 
          component={HomeStack} 
          options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
}

export default App;