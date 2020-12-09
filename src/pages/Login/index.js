import React,{useEffect, useState} from 'react';
import {Feather} from '@expo/vector-icons';
import { Link, useNavigation} from '@react-navigation/native';
import {View , FlatList, Image, Text, TouchableOpacity, TextInput, Button, inputpas, StyleSheet, Alert} from 'react-native';

import logoImg from '../../assets/Logo.png';
import styles from './styles';
import Axios from 'axios';
//import api from '../../services/api';


export default function Login({ navigation: { navigate } }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    

    async function navigateToHome(){
        navigate('Home'); 
        return;
        if(email === '' || password === ''){
            Alert.alert(
                "Erro",
                "Campos vazios",
                [
                  {
                    text: "",
                    onPress: () => console.log("")
                  },                  
                  { text: "OK", onPress: () => {
                    
                  } }
                ],
                { cancelable: false }
              );
            return;
        }
        const result = await Axios.post('http://10.0.2.2:3333/auth', {email, password})
        .then(result => {            
                navigate('Home');            
        })
        .catch(err => {            
            Alert.alert(
                "Erro",
                "Email ou senha incorretos",
                [
                  {
                    text: "",
                    onPress: () => console.log("")
                  },                  
                  { text: "OK", onPress: () => {
                    
                  } }
                ],
                { cancelable: false }
              );
  
        })        
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
            onChangeText={text => setEmail(text)}
            placeholder = 'E-mail'
            placeholderTextColor="#FFF" 
            value={email}
            />
             <TextInput
                style={styles.input}
                onChangeText={text => setPassword(text)}
                placeholder = 'password'
                placeholderTextColor="#FFF" 
                value={password}
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