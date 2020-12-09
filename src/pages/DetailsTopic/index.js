import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { View, Text, Image, Button, ActivityIndicator} from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
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

export default function DetailsTopic({ navigation, route }) {
  const [lessons, setLessons] = useState([])
  useEffect(() => {
    async function carregarModulos(){          
      const result = await Axios.get('http://10.0.2.2:3333/lesson/'+route.params.id)
      .then((res) => {        
        if(res.data.length > 0)
        setLessons(res.data)
      });     
    }
    carregarModulos();
  },[])
  const data = [
    {
      lessonName: "Aula 01 - Dias da semana",
      lessonStatus: 0
    },
    {
      lessonName: "Aula 02 - Números",
      lessonStatus: 0
    },
    {
      lessonName: "Aula 03 - Meses",
      lessonStatus: 1
    },
    {
      lessonName: "Aula 04- Feriados",
      lessonStatus: 1
    },
    {
      lessonName: "Aula 05 - Any",
      lessonStatus: 2
    },
    {
      lessonName: "Aula 06 - Words basics",
      lessonStatus: 2
    },
    {
      lessonName: "Aula 01 - Dias da semana",
      lessonStatus: 0
    },
    {
      lessonName: "Aula 02 - Números",
      lessonStatus: 0
    },
    {
      lessonName: "Aula 03 - Meses",
      lessonStatus: 1
    },
    {
      lessonName: "Aula 04- Feriados",
      lessonStatus: 1
    },
    {
      lessonName: "Aula 05 - Any",
      lessonStatus: 2
    },
    {
      lessonName: "Aula 06 - Words basics",
      lessonStatus: 2
    },
    {
      lessonName: "Aula 01 - Dias da semana",
      lessonStatus: 0
    },
    {
      lessonName: "Aula 02 - Números",
      lessonStatus: 0
    },
    {
      lessonName: "Aula 03 - Meses",
      lessonStatus: 1
    },
    {
      lessonName: "Aula 04- Feriados",
      lessonStatus: 1
    },
    {
      lessonName: "Aula 05 - Any",
      lessonStatus: 2
    },
    {
      lessonName: "Aula 06 - Words basics",
      lessonStatus: 2
    }
  ];
    if(lessons.length === 0){
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
    }else{
    return (
        <PaperProvider theme={theme}>
          <Header navigation={navigation}>
          </Header>  
          <ScrollView>
          <View style={styles.container}>
            <View style={styles.titleView}>
            <Image
                style={
                  {
                    width: 100,
                    height: 100,
                    borderRadius: 100/2,
                    marginRight: 15,                         
                  }
                }
                source={{ uri: "https://conteudo.imguol.com.br/c/entretenimento/02/2018/07/20/leonard-nimoy-como-spock-na-serie-star-trek-1532124514829_v2_450x337.png" }}                      
              />
              <Text style={styles.title}>Sejam bem vindo, LearnEnglish...</Text>
            </View>            
            <View style={styles.module}>
              <Text style={styles.moduleTitle}>
                Future
              </Text>
              <View>              
              {                
                  lessons.map((item,i) => {
                    return (
                      <TouchableOpacity key={i} onPress={() => navigation.navigate('DetailsLesson', {id: item.id})}>
                      <View style={styles.lesson}>
                       <Text style={styles.nameLesson}>{item.title}</Text>
                       <Text style={
                         styles.statusLesson, 
                         item.id === 0 ?
                          styles.finalizada :
                          item.id === 1 ?
                          styles.andamento : 
                          styles.naoiniciada
                          }>
                         {
                          item.id === 0 ?
                          "Finalizada":
                          item.id === 1 ?
                          "Em andamento":
                          "Não iniciado"
                        }
                       </Text>
                      </View>
                      </TouchableOpacity>
                      );
                  })
                }                  
              </View>
            </View>            
          </View>
          </ScrollView>
      </PaperProvider>
    )
    }
}