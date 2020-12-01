import React,{ useState} from 'react';
import { Link, useNavigation} from '@react-navigation/native';
import {View, Image, Text, TouchableOpacity, TextInput } from 'react-native';

import logoImg from '../../assets/Logo.png';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
//import api from '../../services/api';


export default function DetailsLesson({ navigation: { navigate } }) {
    return (
        <View style ={styles.container}>
            <View>
            <TouchableOpacity onPress={() => navigation.goBack() }> 
                <Feather name="arrow-left" size={18} color="white"  />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.goBack() }> 
                <Feather name="heart" size={30} color="red"  />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.goBack() }> 
                <Feather name="play" size={42} color="white"  />
            </TouchableOpacity>
            <Image
                style={
                  {
                    width: '100%',
                    height: 240,                        
                  }
                }
                source={{ uri: "https://conteudo.imguol.com.br/c/entretenimento/02/2018/07/20/leonard-nimoy-como-spock-na-serie-star-trek-1532124514829_v2_450x337.png" }}                      
              />
            </View>
            
        </View>        

    );
    
}