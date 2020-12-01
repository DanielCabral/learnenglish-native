import React from 'react'

import { Button, Image, View } from 'react-native'
import { Back, MoreVertical } from 'react-feather';
import styles from './styles'
import { Feather } from '@expo/vector-icons'; 

import logoImg from '../../assets/logo-white.png';
import { Searchbar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Header({ navigation }) {    
    return (
       <View styles={{alignItems: 'center', justifyContent: 'center'}}>
       <View style={styles.header}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{width: 44, height:44, marginLeft:20}}
            >
                <Feather name="chevron-left" size={24} color="white" />
            </TouchableOpacity>
            <Image style={{width: 185, height: 64, justifyContent:"center", alignContent: 'center', marginRight:20}} source={logoImg} />
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{width: 44, height:44}}
            >
            <Feather name="more-vertical" size={24} color="white"/>
            </TouchableOpacity> 
            
        </View>
        <View 
          style={{ flexDirection:'row', alignItems: 'center', justifyContent: 'center',width: 'auto', marginTop: -20,marginRight: 20, marginLeft:20}}
        >
            <Searchbar  
                style={{justifyContent: 'center'}}        
                placeholder="Pesquisar"
            />
        </View>        
        </View>
    )
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         