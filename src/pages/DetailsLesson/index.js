import React,{ useState} from 'react';
import { Link, useNavigation} from '@react-navigation/native';
import {View, Image, Text, TouchableOpacity, TextInput } from 'react-native';

import play from '../../assets/play.png';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import Axios from 'axios';
//import api from '../../services/api';


export default function DetailsLesson({ navigation , route }) {

    const idLesson =  route.params.id ;    
    const lessons = route.params.lessons;

    const atualLesson = lessons[idLesson];
    const backLesson = lessons[idLesson - 1];
    const nextLesson = lessons[idLesson + 1];
    return (
        <View style ={styles.container}>
            <View>            
            <ImageBackground
                style={
                  {
                    width: '100%',
                    height: 240,   
                    alignItems: 'center',
                    justifyContent: 'center'                     
                  }
                }
                source={{ uri: atualLesson.thumbnail}}                      
              >
                    <TouchableOpacity onPress={() => navigation.navigate('Player',{uri: atualLesson.link}) }> 
                        <Image source={play}/>
                    </TouchableOpacity>
              </ImageBackground>
            <TouchableOpacity 
            style={styles.arrowleft}
            onPress={() => navigation.goBack()}
            > 
                <Feather name="chevron-left" size={24} color="white"  />
            </TouchableOpacity>            
        
            <TouchableOpacity 
            style={styles.heart}
            onPress={() => navigation.goBack() }> 
                <Feather name="heart" size={30} color="red"  />
            </TouchableOpacity>                        
            </View>
            <View style={styles.buttonsView}>
                <TouchableOpacity 
                    disabled={backLesson === undefined ? true : false} 
                    onPress={() => navigation.navigate('DetailsLesson', 
                                  {
                                    lessons: lessons, 
                                    id: idLesson-1
                                  }
                                )}
                    style={ backLesson === undefined ? styles.buttonDisabled: styles.button }
                >                
                    <Feather name="arrow-left" size={20} color="white" />
                    <Text style={styles.text}>Aula Anterior</Text>                
                </TouchableOpacity>

                <TouchableOpacity 
                style={  styles.buttonDisabled }
                disabled={true}>                
                    <Feather name="message-circle" size={20} color="white" />
                    <Text style={styles.text}>Forúm  da Aula</Text>            
                </TouchableOpacity>

                <TouchableOpacity 
                    disabled={nextLesson === undefined ? true : false} 
                    onPress={() => navigation.navigate('DetailsLesson', 
                                  {
                                    lessons: lessons, 
                                    id: idLesson+1
                                  }
                                )}
                    style={ nextLesson === undefined ? styles.buttonDisabled : styles.button }
                >                
                    <Text style={styles.text}>Próxima Aula</Text>  
                    <Feather name="arrow-right" size={20} color="white" />              
                </TouchableOpacity>
            </View>
            <View style={styles.description}>
                <View style={styles.titleAndProfile}>
                    <Text style={styles.title}>{atualLesson.title}</Text>
                    <TouchableOpacity style={styles.profile}>
                        <Text style={styles.title}>Jose Luiz</Text>
                        <Image style={styles.imageProfile} source={{uri: 'https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-avatar-icon-png-image_4013519.jpg'}}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.textDescription}>
                    {atualLesson.description}
                    </Text>
                </View>
            </View>
        </View>        

    );
    
}