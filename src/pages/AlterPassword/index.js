import React,{useEffect, useState} from 'react';
import {Feather} from '@expo/vector-icons';
import { Link, useNavigation} from '@react-navigation/native';
import {View , FlatList, Image, Text, TouchableOpacity, TextInput, Button, inputpas, StyleSheet} from 'react-native';

import logoImg from '../../assets/Logo.png';
import styles from './styles';
//import api from '../../services/api';


export default function AlterPassword() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation();

 

    return (
        <View style ={styles.container}>
            <View>
            <Image source={logoImg} styles={styles.headerImage}/>

            <Text style={styles.grettingsText}>Sejam bem vindo, LearnEnglish
cadastre-se e estude de graça com os melhores .</Text>            
            </View>
            <View style={styles.form}>
            <TextInput
            style={styles.input}
            //onChangeText={text => onChangeText(text)}
            placeholder = 'Senha'
            placeholderTextColor="#FFF" 
            value={''}
            secureTextEntry={true}
            />
             <TextInput
                style={styles.input}
                //onChangeText={text => onChangeText(text)}
                placeholder = 'Confirmação de senha'
                placeholderTextColor="#FFF" 
                value={''}
                secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>                
                </TouchableOpacity>
            </View>                       
        </View>        

    );
    
}