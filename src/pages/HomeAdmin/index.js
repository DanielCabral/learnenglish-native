import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image,FlatList, TouchableOpacity, ScrollView} from 'react-native';
import { ActivityIndicator, Appbar, Button, Card, DefaultTheme, FAB, HelperText, Provider as PaperProvider, Searchbar, TextInput } from 'react-native-paper';
import Header from '../../components/Header';
import Level from '../../components/Home/Level';


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#14213D',
    accent: '#07617D',
  },
};

import styles from './styles';

export default function HomeAdmin({ navigation, route }) {
  const [starter, setStarter] = useState([]);
  const [intermediate, setIntermediate] = useState([])
  const [advanced, setAdvanced] = useState([])
  const [requisicao, setRequisicao] = useState([])
  useEffect(() => {
    async function carregarModulos(){
      result = await Axios.get('https://api-learnenglish.herokuapp.com/modules')
      .then((res) => {
      setRequisicao(res);
      setStarter(res.data.filter((item) => item.level === '0'))      
      setIntermediate(res.data.filter((item) => item.level === '1'))
      setAdvanced(res.data.filter((item) => item.level === '2'))      
      });
      
    }
    carregarModulos();
  },[])
  
    if(requisicao.length === 0){
      return(
        <PaperProvider theme={theme}>
          <Header navigation={navigation}>
          </Header> 
          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }
        }>
            <ActivityIndicator color='#2E383F'style={{transform: [{scale: 2.0}]}} size="large"/>
          </View>          
      </PaperProvider>        
      )
    }
    return (
        <PaperProvider theme={theme}>
          <Header navigation={navigation}>
          </Header>  
          <ScrollView>
          <View style={styles.container}>
            <View style={styles.titleView}>
              <Text style={styles.title}>Sejam bem vindo, LearnEnglish...</Text>
            </View>
            <Level navigation={navigation} admin={true} title="Iniciante" data={[{},...starter]}/>
            <Level navigation={navigation} admin={true} title="Intermediario" data={[{},...intermediate]}/>
            <Level navigation={navigation} admin={true} title="Avançado" data={[{},...advanced]}/>
          </View>
          </ScrollView>            
      </PaperProvider>
    )
}