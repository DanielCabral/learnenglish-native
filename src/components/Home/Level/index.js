import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Alert, Image, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';


import styles from './styles';
import Axios from 'axios';

export default function Level({ deletarmodulo, navigation, data, title, admin, id}) {
  
    return (
        <View style={styles.level}>
        <Text style={styles.levelTitle}>
          {title}
        </Text>
        <Text style={styles.levelSubTitle}>
          Sejam bem vindo, LearnEnglish...
        </Text>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={
            {
              marginTop: 18,
            }
          }
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            if( index === 0 && admin){
              return(
                <View style={styles.module}>
              <TouchableOpacity onPress={() => navigation.navigate('Module')}>
              <View
                style={
                  {
                    width: 70,
                    height: 70,
                    borderRadius: 70/2,
                    marginRight: 15,      
                    borderColor: "#ccc",      
                    borderWidth: 1,            
                    backgroundColor: "#fff",
                    alignItems: "center",
                    justifyContent: "center",
                  }
                }
              >
                <Feather                            name="plus" size={24} color="black" />
              </View>
              </TouchableOpacity>
               <Text style={{ marginRight: 15, marginTop: 3 }}>
               Add
             </Text>
             </View>
              );
            }
            else{
            return (
              <View style={styles.module}>
              <TouchableOpacity onPress={() => navigation.navigate('DetailsTopic', {id: item.id})}
                onLongPress={() => {
                  if(admin)
                    deletarmodulo(item.id, item.level);
                }}
              >
              <Image
                style={
                  {
                    width: 70,
                    height: 70,
                    borderRadius: 70/2,
                    marginRight: 15,                         
                  }
                }
                source={{ uri: item.image}}                      
              />
              </TouchableOpacity>
               <Text style={{ marginRight: 15, marginTop: 3 }}>
               {item.title}
             </Text>
             </View>
            );
            }
          }}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
}
