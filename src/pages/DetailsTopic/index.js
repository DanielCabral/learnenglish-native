import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FAB } from 'react-native-paper';
import { View, Text, Image, Button, ActivityIndicator, FlatList, ScrollView, TouchableOpacity} from 'react-native';
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
  const [module, setModule] = useState({})
  
  useEffect(() => {
    async function carregarModulos(){          
      const result = await Axios.get('https://api-learnenglish.herokuapp.com/lesson/'+route.params.id)
      .then((res) => {        
        if(res.data.length > 0)
        setLessons(res.data)
      });     
      await Axios.get('https://api-learnenglish.herokuapp.com/module/'+route.params.id)
      .then((res) => {        
        if(res.data.length > 0)
        setModule(res.data[0])
      });     
    }
    carregarModulos();
  },[])
  
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
                source={{ uri: module.image }}                      
              />
              <Text style={styles.title}>{module.description}</Text>
            </View>            
            <View style={styles.module}>
              <Text style={styles.moduleTitle}>
                {module.title}
              </Text>
              <View style={styles.lessonContainer}>              
              {                
                  lessons.map((item,i) => {
                    return (
                      <TouchableOpacity 
                        key={i} 
                        onPress={() => navigation.navigate('DetailsLesson', 
                                  {
                                    lessons: lessons, 
                                    id: lessons.indexOf(item)
                                  }
                                )}
                      >
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
           <FAB
            style={styles.fab}
            small
            icon="plus"
            onPress={() => navigation.navigate("Lesson")}
          />
      </PaperProvider>
    )
    }
}