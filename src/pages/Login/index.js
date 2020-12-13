import React,{useEffect, useState} from 'react';
import {Feather} from '@expo/vector-icons';
import { Link, useNavigation} from '@react-navigation/native';
import {View , FlatList, Image, Text, TouchableOpacity, TextInput, Button, inputpas, StyleSheet, Alert} from 'react-native';

import logoImg from '../../assets/Logo.png';
import styles from './styles';
import Axios from 'axios';
//import api from '../../services/api';

import * as yup from 'yup'
import { Formik } from 'formik';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Por favor, digite um email valido")
    .required('Campo obrigatório'),
  password: yup
    .string()
    .min(6, ({ min }) => `A senha deve conter no minimo ${min} caracteres`)
    .required('Campo obrigatório'),
})

export default function Login({ navigation}) {
   

    async function navigateToHome(values){
      values = {
        email: 'daniel@gmail.com',
        password: '1234568'
      }                  
        await Axios.post('http://10.0.2.2:3333/auth', values)
        .then((result) => {           
            if(result.data.type === 0)              
              navigation.navigate('Home');              
            else
              navigation.navigate('HomeAdmin');                                
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

              <Text style={styles.grettingsText}>
                Sejam bem vindo, LearnEnglish cadastre-se e estude de graça com os melhores .
              </Text>            
            </View>
           <View style={styles.containerFormAndRegister}>
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{ email: '', password: ''}}
              onSubmit={values => navigateToHome(values)}
            >
              {({ handleChange, handleBlur, handleSubmit, errors, touched, isValid,values }) => 
                (
                  <View style={styles.form}>           
                      <TextInput
                          name='email'
                          style={styles.input}            
                          placeholder = 'E-mail'
                          placeholderTextColor="#FFF"             
                          onChangeText={handleChange('email')}
                          onBlur={handleBlur('email')}
                          value={values.email}
                      />
                       {(errors.email && touched.email) &&
                          <Text style={styles.errorText}>{errors.email}</Text>
                        }
                      <TextInput
                          name='password'
                          style={styles.input}                
                          placeholder = 'password'
                          placeholderTextColor="#FFF" 
                          onChangeText={handleChange('password')}
                          onBlur={handleBlur('password')}
                          value={values.password}
                          secureTextEntry
                      />    

                       {(errors.password && touched.password) &&
                          <Text style={styles.errorText}>{errors.password}</Text>
                        }
                      <TouchableOpacity 
                        style={styles.button} 
                          onPress={handleSubmit}
                      >
                          <Text style={styles.buttonText}>Login</Text>                
                      </TouchableOpacity>

                      <Text style={styles.text}>Esqueceu a senha?  <Link to='/RecoverPassword' style={styles.link}>Recuperar senha</Link></Text>                
                  </View>           
                ) 
              }
            </Formik>
            
              <Text style={styles.containeRegister}>Não possui uma conta? <Link to='/Register'style={styles.link}>Cadastre-se</Link></Text> 
            </View>
        </View>        

    );
    
}