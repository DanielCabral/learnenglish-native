import React,{ useState} from 'react';
import { Link, useNavigation} from '@react-navigation/native';
import {View, Image, Text, TouchableOpacity, TextInput } from 'react-native';

import play from '../../assets/play.png';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
//import api from '../../services/api';


export default function DetailsLesson({ navigation }) {
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
                source={{ uri: "https://conteudo.imguol.com.br/c/entretenimento/02/2018/07/20/leonard-nimoy-como-spock-na-serie-star-trek-1532124514829_v2_450x337.png" }}                      
              >
                    <TouchableOpacity onPress={() => navigation.navigate('Player') }> 
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
                <TouchableOpacity style={styles.button}>                
                    <Feather name="arrow-left" size={20} color="white" />
                    <Text style={styles.text}>Aula Anterior</Text>                
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>                
                    <Feather name="message-circle" size={20} color="white" />
                    <Text style={styles.text}>Forúm  da Aula</Text>            
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>                
                    <Feather name="arrow-right" size={20} color="white" />
                    <Text style={styles.text}>Próxima Aula</Text>                
                </TouchableOpacity>
            </View>
            <View style={styles.description}>
                <View style={styles.titleAndProfile}>
                    <Text style={styles.title}>Aula 01 - The Stonehenge Legacy</Text>
                    <TouchableOpacity style={styles.profile}>
                        <Text style={styles.title}>Jose Luiz</Text>
                        <Image style={styles.imageProfile} source={{uri: 'https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-avatar-icon-png-image_4013519.jpg'}}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.textDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat vitae elit et morbi at libero id. Purus pellentesque tristique nulla morbi aliquet dignissim non. Adipiscing purus adipiscing ullamcorper sociis luctus. Enim non non, condimentum elementum feugiat arcu nisl.
                    </Text>
                </View>
            </View>
        </View>        

    );
    
}