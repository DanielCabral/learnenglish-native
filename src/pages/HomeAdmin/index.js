import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image,FlatList, TouchableOpacity, ScrollView, Alert} from 'react-native';
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
  
  async function deletarmodulo(id, level){
    Alert.alert(
      "Deletar Modulo",
      "Confirma deletação de modulo",
      [
        {
          text: "",
          onPress: () => console.log("")
        },
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: async () => {          
          const response = await Axios.delete("http://10.0.2.2:3333/module/"+id)
          .then(result => {            
            if(level == 0){              
              setStarter(starter.filter(item => item.id !== id));
            }else if(level == 1){
              setIntermediate(intermediate.filter(item => item.id !== id));
            }else{
              setAdvanced(advanced.filter(item => item.id !== id));
            }            
          });                  
        } }
      ],
      { cancelable: false }
    );
  }

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
            <Level deletarmodulo={deletarmodulo} navigation={navigation} admin={true} title="Iniciante" data={[{},...starter]}/>
            <Level deletarmodulo={deletarmodulo} navigation={navigation} admin={true} title="Intermediario" data={[{},...intermediate]}/>
            <Level deletarmodulo={deletarmodulo} navigation={navigation} admin={true} title="Avançado" data={[{},...advanced]}/>
          </View>
          </ScrollView>            
      </PaperProvider>
    )
}