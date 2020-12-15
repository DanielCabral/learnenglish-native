import React,{useEffect, useState} from 'react';
import {Feather} from '@expo/vector-icons';
import { Link, useNavigation} from '@react-navigation/native';
import {View , FlatList, Image, Text, TouchableOpacity, TextInput, Button, inputpas, StyleSheet, Alert} from 'react-native';

import logoImg from '../../assets/Logo.png';
import styles from './styles';
//import api from '../../services/api';

import * as yup from 'yup'
import { Formik } from 'formik';
import Axios from 'axios';

const alterValidationSchema = yup.object().shape({
    token: yup
      .string()
      .min(6, 'Digite exatamente 6 digitos')
      .max(6, 'Digite exatamente 6 digitos')
      .required('Campo obrigatório'),
    password: yup
      .string()
      .min(6, ({ min }) => `A senha deve conter no minimo ${min} caracteres`)
      .required('Campo obrigatório'),
  })

export default function AlterPassword({ navigation, route }) {    

    async function navigateToAlterPassword(values){        
        values = {
          email: route.params.email,
          password: '123456',          
          token: values.token
        }                  
          await Axios.post('http://10.0.2.2:3333/resetpassword', values)
          .then((result) => {           
              if(result.status === 200){              
                alert('Senha alterada com sucesso');                               
                navigation.navigate('Login');              
              }else
                alert('Erro no token');                               
          })
          .catch(err => {            
              Alert.alert(
                  "Erro",
                  "Erro, tente novamente",
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

            <Formik
              validationSchema={alterValidationSchema}
              initialValues={{ password: '', token: '',}}
              onSubmit={values => navigateToAlterPassword(values)}
            >
              {({ handleChange, handleBlur, handleSubmit, errors, touched, isValid,values }) => 
                (            
            <View style={styles.form}>                                      
             <TextInput
             name= "token"
                style={styles.input}                
                placeholder = 'Token'
                placeholderTextColor="#FFF" 
                onChangeText={handleChange('token')}
                onBlur={handleBlur('token')}
                value={values.token}                
                />
                {(errors.token && touched.token) &&
                          <Text style={styles.errorText}>{errors.token}</Text>
                        }
             
             <TextInput
             name= "password"
                style={styles.input}                
                placeholder = 'Senha'
                placeholderTextColor="#FFF" 
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={true}
                />
                {(errors.password && touched.password) &&
                          <Text style={styles.errorText}>{errors.password}</Text>
                        }
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Login</Text>                
                </TouchableOpacity>
            </View>
            ) 
        }
      </Formik>                       
        </View>        

    );
    
}