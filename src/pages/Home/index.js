import React from 'react'
import { StyleSheet, View, Text, Image,FlatList, TouchableOpacity} from 'react-native';
import { Appbar, Button, DefaultTheme, FAB, HelperText, Provider as PaperProvider, Searchbar, TextInput } from 'react-native-paper';
import Header from '../../components/Header';


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
          <View style={styles.container}>
            <View style={styles.titleView}>
              <Text style={styles.title}>Sejam bem vindo, LearnEnglish...</Text>
            </View>
            <View style={styles.level}>
              <Text style={styles.levelTitle}>
                Iniciante
              </Text>
              <Text style={styles.levelSubTitle}>
                Sejam bem vindo, LearnEnglish...
              </Text>
              {/* <FlatList
                renderItem={()=>{
                return(                <TouchableOpacity>
                  <Image></Image>
                  <Text>Saudações</Text>
                </TouchableOpacity>
                )
                }}
              /> */}
              <FlatList
                data={data}
                renderItem={({ item: rowData }) => {
                  return (
                    <Card
                      title={null}
                      image={{ uri: "http://via.placeholder.com/160x160" }}
                      containerStyle={{ padding: 0, width: 160 }}
                    >
                      <Text style={{ marginBottom: 10 }}>
                        hello
                      </Text>
                    </Card>
                  );
                }}
                keyExtractor={(item, index) => index}
              />
               <TouchableOpacity>
                  <Image></Image>
                  <Text>Saudações</Text>
                </TouchableOpacity>
            </View>

          </View>
          <FAB  
              style={styles.fab}
              small
              icon="plus"
              onPress={() => console.log('Pressed')}
          />
      </PaperProvider>
    )
}