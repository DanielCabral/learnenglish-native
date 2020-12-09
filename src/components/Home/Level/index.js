import React from 'react'
import { Image, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';


import styles from './styles';

export default function Level({ navigation, data, title }) {
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
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.module}>
              <TouchableOpacity onPress={() => navigation.navigate('DetailsTopic',{id: item.id})}>
              <Image
                style={
                  {
                    width: 70,
                    height: 70,
                    borderRadius: 70/2,
                    marginRight: 15,                         
                  }
                }
                source={{ uri: "https://conteudo.imguol.com.br/c/entretenimento/02/2018/07/20/leonard-nimoy-como-spock-na-serie-star-trek-1532124514829_v2_450x337.png" }}                      
              />
              </TouchableOpacity>
               <Text style={{ marginRight: 15, marginTop: 3 }}>
               {item.title}
             </Text>
             </View>
            );
          }}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
}
