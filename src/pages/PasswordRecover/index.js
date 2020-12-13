import React,{useEffect, useState} from 'react';
import {Feather} from '@expo/vector-icons';
import { Link, useNavigation} from '@react-navigation/native';
import {View , FlatList, Image, Text, TouchableOpacity, TextInput, Button, inputpas, StyleSheet} from 'react-native';

import logoImg from '../../assets/Logo.png';
import styles from './styles';
//import api from '../../services/api';


export default function PasswordRecover() {
    const [email, setEmail] = useState('');

    const navigation = useNavigation();

    function navigateToAlterPassword(){
        navigation.navigate('AlterPassword');
    }

    return (
        <View style ={styles.container}>
            <View style={styles.header}>
            <Image source={logoImg} styles={styles.headerImage}/>

            <Text style={styles.grettingsText}>Preencha os campo para validar seus dados e recuperar seu acesso.</Text>            
            </View>
            <View style={styles.form}>
            <TextInput
            style={styles.input}
            //onChangeText={text => onChangeText(text)}
            placeholder = 'Digite seu e-mail'
            placeholderTextColor="#FFF" 
            value={''}
            />        
                <TouchableOpacity style={styles.button} onPress={()=> navigateToAlterPassword()}>
                    <Text style={styles.buttonText}>Enviar  </Text>                
                </TouchableOpacity>        
            </View>                       
        </View>        

    );
    
}