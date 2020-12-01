import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RecoverPassword from './pages/PasswordRecover';
import AlterPassword from './pages/AlterPassword';
import Profile from './pages/Profile';
import DetailsTopic from './pages/DetailsTopic';
import DetailsLesson from './pages/DetailsLesson';
import Player from './pages/Player';

export default function Routes(){
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false }}>                        
            <AppStack.Screen name = "Login" component={Login}/>
            <AppStack.Screen name = "Home" component={Home}/>
            <AppStack.Screen name = "Register" component={Register}/>
            <AppStack.Screen name = "AlterPassword" component={AlterPassword}/>
            <AppStack.Screen name = "RecoverPassword" component={RecoverPassword}/>
            <AppStack.Screen name = "Profile" component={Profile}/>
            <AppStack.Screen name = "DetailsTopic" component={DetailsTopic}/>
            <AppStack.Screen name = "Player" component={Player}/>
            <AppStack.Screen name = "DetailsLesson" component={DetailsLesson}/>

            </AppStack.Navigator>
        </NavigationContainer>
    )
}
