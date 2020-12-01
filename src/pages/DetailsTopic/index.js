import React from 'react'
import { View, Text, Image, Button} from 'react-native';
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
                  data.map((item,i) => {
                    return (
                      <TouchableOpacity key={i} onPress={() => navigation.navigate('DetailsLesson')}>
                      <View style={styles.lesson}>
                       <Text style={styles.nameLesson}>{item.lessonName}</Text>
                       <Text style={
                         styles.statusLesson, 
                         item.lessonStatus === 0 ?
                          styles.finalizada :
                          item.lessonStatus === 1 ?
                          styles.andamento : 
                          styles.naoiniciada
                          }>
                         {
                          item.lessonStatus === 0 ?
                          "Finalizada":
                          item.lessonStatus === 1 ?
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