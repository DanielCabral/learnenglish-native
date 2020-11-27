import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RecoverPassword from './pages/PasswordRecover';
import AlterPassword from './pages/AlterPassword';

export default function Routes(){
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false }}>
            
            <AppStack.Screen name = "Login" component={Login}/>
            <AppStack.Screen name = "Home" component={Home}/>
            <AppStack.Screen name = "Register" component={Register}/>
            <AppStack.Screen name = "AlterPassword" component={AlterPassword}/>
            <AppStack.Screen name = "RecoverPassword" component={RecoverPassword}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}
