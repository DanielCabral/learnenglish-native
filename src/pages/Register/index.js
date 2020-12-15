import React,{useEffect, useState} from 'react';
import {Feather} from '@expo/vector-icons';
import { Link} from '@react-navigation/native';
import {View , ScrollView , Image, Text, TouchableOpacity, TextInput, Button, inputpas, StyleSheet} from 'react-native';

import logoImg from '../../assets/Logo.png';
import styles from './styles';
//import api from '../../services/api';

import * as yup from 'yup'
import { Formik } from 'formik';
import Axios from 'axios';

const registerValidationSchema = yup.object().shape({
    name: yup
      .string()      
      .required('Campo obrigatório'),
    phone: yup
      .string()   
      .max(11, ({ max }) => ` O telefone deve conter no maximo ${max} caracteres`)   
      .min(10, ({ min }) => `O telefone conter no minimo ${min} caracteres, com o DDD`)
      .required('Campo obrigatório'),
    email: yup
      .string()
      .email("Por favor, digite um email valido")
      .required('Campo obrigatório'),
    password: yup
      .string()
      .min(6, ({ min }) => `A senha deve conter no minimo ${min} caracteres`)
      .required('Campo obrigatório'),
  })
  


export default function Register({ navigation}) {

    async function navigateToLogin(values){          
          await Axios.post('https://api-learnenglish.herokuapp.com/user', values)
          .then(() => {   
              alert('Cadastro efetuado com sucesso');      
              navigation.navigate('Login');            
          })
          .catch(err => {            
              Alert.alert(
                  "Erro",
                  "Erro no cadastro, tente novamente!",
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
        <ScrollView style ={{flex: 1, backgroundColor:"#14213D"}}>
        <View style ={styles.container}>
            
          <View style={styles.header}>
            <Image source={logoImg} styles={styles.headerImage}/>

            <Text style={styles.grettingsText}>Prencha os campos para finalizar seu registro.</Text>            
            </View>
            <Formik
              validationSchema={registerValidationSchema}
              initialValues={{ name: '', phone: '', email: '', password: ''}}
              onSubmit={values => navigateToLogin(values)}
            >
              {({ handleChange, handleBlur, handleSubmit, errors, touched, isValid,values }) => 
                (
            <View style={styles.form}>
            <TextInput
            name='name'
            style={styles.input}
            placeholder = 'Nome'
            placeholderTextColor="#FFF" 
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}            
            />
            {(errors.name && touched.name) &&
                          <Text style={styles.errorText}>{errors.name}</Text>
                        }
            <TextInput
            name='phone'
            style={styles.input}            
            placeholder = 'Telefone '
            placeholderTextColor="#FFF" 
            onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
            value={values.phone}            
            />
            {(errors.phone && touched.phone) &&
                          <Text style={styles.errorText}>{errors.phone}</Text>
                        }
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
                name= 'password'
                style={styles.input}                
                placeholder = 'Senha'
                placeholderTextColor="#FFF" 
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}            
                secureTextEntry
                />
              {(errors.password && touched.password) &&
                          <Text style={styles.errorText}>{errors.password}</Text>
                        }
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Registrar-se</Text>                
                </TouchableOpacity>              
            </View>  
            )
        }
    </Formik>   
                    
        </View> 
        </ScrollView>        

    );
    
}