import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image,FlatList, TouchableOpacity, ScrollView} from 'react-native';
import { Appbar, Button, Card, DefaultTheme, FAB, HelperText, Provider as PaperProvider, Searchbar, TextInput } from 'react-native-paper';
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

export default function Home({ navigation, route }) {
  const [starter, setStarter] = useState([]);
  const [intermediate, setIntermediate] = useState([])
  const [advanced, setAdvanced] = useState([])
  useEffect(() => {
    async function carregarModulos(){
      const result = await Axios.get('https://api-learnenglish.herokuapp.com/modules');
      setStarter(result.data.filter((item) => item.level === '0'))      
      setIntermediate(result.data.filter((item) => item.level === '1'))
      setAdvanced(result.data.filter((item) => item.level === '2'))
    }
    carregarModulos();
  },[])
  const data = [
    {
      imageUrl: "http://via.placeholder.com/160x160",
      title: "something"
    },
    {
      imageUrl: "http://via.placeholder.com/160x160",
      title: "something two"
    },
    {
      imageUrl: "http://via.placeholder.com/160x160",
      title: "something three"
    },
    {
      imageUrl: "http://via.placeholder.com/160x160",
      title: "something four"
    },
    {
      imageUrl: "http://via.placeholder.com/160x160",
      title: "something five"
    },
    {
      imageUrl: "http://via.placeholder.com/160x160",
      title: "something six"
    }
  ];

    return (
        <PaperProvider theme={theme}>
          <Header navigation={navigation}>
          </Header>  
          <ScrollView>
          <View style={styles.container}>
            <View style={styles.titleView}>
              <Text style={styles.title}>Sejam bem vindo, LearnEnglish...</Text>
            </View>
            <Level navigation={navigation} title="Iniciante" data={data}/>
            <Level navigation={navigation} title="Intermediario" data={data}/>
            <Level navigation={navigation} title="Avançado" data={data}/>
          </View>
          </ScrollView>            
      </PaperProvider>
    )
}