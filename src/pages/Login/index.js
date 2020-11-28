import React,{useEffect, useState} from 'react';
import {Feather} from '@expo/vector-icons';
import { Link, useNavigation} from '@react-navigation/native';
import {View , FlatList, Image, Text, TouchableOpacity, TextInput, Button, inputpas, StyleSheet} from 'react-native';

import logoImg from '../../assets/Logo.png';
import styles from './styles';
//import api from '../../services/api';


export default function Login({ navigation: { navigate } }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    

    function navigateToHome(){
        navigate('Home');
    }

    return (
        <View style ={styles.container}>
            <View style={styles.header}>
            <Image source={logoImg} styles={styles.headerImage}/>

            <Text style={styles.grettingsText}>Sejam bem vindo, LearnEnglish
cadastre-se e estude de graça com os melhores .</Text>            
            </View>
            <View style={styles.form}>
            <TextInput
            style={styles.input}
              //onChangeText={text => onChangeText(text)}
            placeholder = 'E-mail'
            placeholderTextColor="#FFF" 
            value={''}
            />
             <TextInput
                style={styles.input}
                //onChangeText={text => onChangeText(text)}
                placeholder = 'Senha'
                placeholderTextColor="#FFF" 
                value={''}
                secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button} onPress={()=> navigateToHome()}>
                    <Text style={styles.buttonText}>Login</Text>                
                </TouchableOpacity>
                <Text style={styles.text}>Esqueceu a senha?  <Link to='/RecoverPassword' style={styles.link}>Recuperar senha</Link></Text>                
            </View>           
            <Text style={styles.text}>Não possui uma conta? <Link to='/Register' style={styles.link}>Cadastre-se</Link></Text> 
        </View>        

    );
    
}