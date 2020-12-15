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

const recoverValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Por favor, digite um email valido")
    .required('Campo obrigatório'),
})


export default function PasswordRecover() {
    const [email, setEmail] = useState('');

    const navigation = useNavigation();

    function navigateToAlterPassword(){
        navigation.navigate('AlterPassword');
    }

    async function navigateToAlterPassword(values){
        values = {
          email: 'jeciane@gmail.com',          
        }                  
          await Axios.post('http://10.0.2.2:3333/forgotpassword', values)
          .then((result) => {           
              if(result.status === 200)              
                navigation.navigate('AlterPassword', {email: values.email});              
              else
                alert('Email não existe');                               
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

            <Text style={styles.grettingsText}>Preencha os campo para validar seus dados e recuperar seu acesso.</Text>            
            </View>
            <Formik
              validationSchema={recoverValidationSchema}
              initialValues={{ email: ''}}
              onSubmit={values => navigateToAlterPassword(values)}
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
                <TouchableOpacity style={styles.button}      onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Enviar  </Text>                
                </TouchableOpacity>        
            </View>                       
            ) 
        }
      </Formik>
        </View>        

    );
    
}