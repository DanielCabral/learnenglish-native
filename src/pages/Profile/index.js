import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

import ImagePicker from 'react-native-image-picker';
import { TextInput } from 'react-native-paper';
//import Axios from 'axios';

import Header from '../../components/Header';

export default function Profile({ navigation }) {
  const [avatar, setAvatar] = useState();

  const imagePickerOptions = {
    title: 'Selecione uma imagem',
    customButtons: [
      {
        name: 'fb',
        title: 'Selecione uma imagem do facebook',
      },
      {
        name: 'ig',
        title: 'Selecione uma imagem do instagram',
      },
    ],
  };

  function imagePickerCallback(data) {
    if (data.didCancel) {
      return;
    }

    if (data.error) {
      return;
    }

    if (data.customButton) {
      return;
    }

    if (!data.uri) {
      return;
    }

    setAvatar(data);
  }

  async function uploadImage() {
    const data = new FormData();

    data.append('avatar', {
      fileName: avatar.fileName,
      uri: avatar.uri,
      type: avatar.type,
    });

    //await Axios.post('http://localhost:3333/files', data);
  }

  return (
    <View style={styles.container}>
      <Header navigation={navigation}>
      </Header> 
      <Image
        source={{
          uri: avatar
            ? avatar.uri
            : 'https://icons-for-free.com/iconfiles/png/512/box+document+outline+share+top+upload+icon-1320195323221671611.png',
        }}
        style={styles.avatar}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          ImagePicker.showImagePicker(imagePickerOptions, imagePickerCallback)
        }>
        <Text style={styles.buttonText}>Escolher imagem</Text>
      </TouchableOpacity>
      <View>
        <TextInput
              style={styles.input}
                //onChangeText={text => onChangeText(text)}
              placeholder = 'Nome'
              placeholderTextColor="#FFF" 
              value={''}
        /> 
        
        <TextInput
              style={styles.input}
                //onChangeText={text => onChangeText(text)}
              placeholder = 'Telefone'
              placeholderTextColor="#FFF" 
              value={''}
        />
        <TextInput
              style={styles.input}
                //onChangeText={text => onChangeText(text)}
              placeholder = 'E-mail'
              placeholderTextColor="#FFF" 
              value={''}
        />
        <TextInput
              style={styles.input}
                //onChangeText={text => onChangeText(text)}
              placeholder = 'Senha'
              placeholderTextColor="#FFF" 
              value={''}
        />
        <TextInput
              style={styles.input}
                //onChangeText={text => onChangeText(text)}
              placeholder = 'Confirmação de Senha'
              placeholderTextColor="#FFF" 
              value={''}
        />
      </View>
       <TouchableOpacity
        style={styles.button}
        >
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    marginTop: 18,
    width: 246,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    opacity: 0.98,

    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 17,
    lineHeight: 21,
    display: "flex",
    alignItems: "center",
    color: "gray"
},
button: {
    marginTop: 18,
    backgroundColor: '#07617D',
    borderRadius: 5,
    width: 246,
    height: 48,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
},
buttonText: {
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 25,
    textTransform: "uppercase",
    color: "#FFFFFF"
},
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
