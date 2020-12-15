import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, ImageBackground, Image, ScrollView, Picker} from 'react-native';
//import Picker from '@react-native-picker/picker';
import { Feather } from '@expo/vector-icons'; 


import ImagePicker from 'react-native-image-picker';
import { TextInput } from 'react-native-paper';
import Axios from 'axios';

import styles from './styles.js';

import Header from '../../components/HeaderNoSearch'; 

import * as yup from 'yup'
import { Formik } from 'formik';

const loginValidationSchema = yup.object().shape({
  title: yup
    .string()    
    .required('Campo obrigatório'),
  description: yup
    .string()    
    .required('Campo obrigatório'),
    module: yup
    .string()    
    .required('Campo obrigatório'),
});

export default function Lesson({ navigation, route }) {
  const [avatar, setAvatar] = useState();
  const [modules, setModules] = useState([]);

  useEffect(() => {
    async function carregarModulos(){                 
      await Axios.get('http://192.168.0.109:3333/modules/' + route.params.module.user_id)
      .then((res) => {        
        if(res.data.length > 0){            
          setModules(res.data);
        }
      })
      .catch(err => alert('Erro no cadastro'));           
    }
    carregarModulos();
  },[])

  const imagePickerOptions = {
    title: 'Escolha um video', 
    takePhotoButtonTitle: 'Gravar um video',
    chooseFromLibraryButtonTitle: 'Escolher video da galeria',
    cancelButtonTitle: 'Cancelar',
      mediaType: 'video', 
      storageOptions:{
        skipBackup:true,
        path:'images'
      }
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

  async function saveModule(values){
    alert(JSON.stringify(values))
    const data = {
      title: values.title, 
      description: values.description, 
      link: "https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8", 
      id_module: values.module,
      thumbnail: "https://i2.wp.com/www.hisour.com/wp-content/uploads/2017/09/US-Capitol.jpg?fit=1061%2C640&ssl=1",
      id_user: route.params.module.user_id
    }
    await Axios.post("http://192.168.0.109:3333/lessons",data)
    .then(() => {   
              /*Axios({
              url    : 'https://api-learnenglish.herokuapp.com/lesson/',
              method : 'POST',
              data   : formData,
              headers: {
                           Accept: 'application/json',
                           'Content-Type': 'multipart/form-data',
                           'Authorization':'Basic YnJva2VyOmJyb2tlcl8xMjM='
                       }
                   })*/

              alert('Cadastro efetuado com sucesso');      
              navigation.goBack();            
          })
    .catch(err => alert('Erro no cadastro'));
  };

  return (
    <View style={{backgroundColor: "#F4F6F8"}}>      
      <ScrollView>
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
                source={{ 
                  uri: avatar
                ? avatar.uri
                : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXMzMz////JycnNzc3n5+f39/fy8vL8/Pzp6enU1NTs7Oz5+fnQ0NDZ2dnf39/09PTgONpwAAAE/ElEQVR4nO2cCZaDIBBEI64o6v1vOzoZJ+ISFZpQSeofII8KvQvcboQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEK2UQ9iL0UcpdJUt11WFyN11rU6TT9Hp1Kmq/oysSn7qjOfIFLd2qxJ9miy9vbeIpXO+l15d/pMv7FGXe1v32wjKx17oW4oXS19b4+yesN9VGl2Vt+vxix9N43dGfu0bLWLveRLmPqivpHaxF72eXTuIDBJ8neJOKq94oFzyvY9nDFz1DeSxV78GSoPgUlSxV7+IamfwEFiGlvCAb4C0XdR+fjgRAYcblQnIDBJOlyJrYjAJGljC9nDuObBJSVqdeNSqm1Tx5ayiUiUmYB0RX21m3hGg1iiytnoSBFbzhqpODoBF0+VW8O0T47miTK5fg5Yz59Kb+GwiVgluLQXjmB5YhFAIVQ41QEEJglQThQtZx4gtVHycWYkjy3rQRgjBYo1gYwUyUyPvqC50scWNpEGEpgkKEk/RLq/g+KI8jXpBEhtqmQ7wzk1SKgJUbLdQSncwuT7EZScLzVEXFPGlvZHMIFJElvaH1RIhVQYHyqkQnyFn5/xJT862aBUbR9feX9B9xRqEIVzCOzzpxjh0kVsYf98/DTxCybCoRwRxg1D5fwmtqwHX/B17eO/kH7BV26hg6U2YGfbApw2iS1pwcefGJJPGECp4o64J4J54YhscQpTks7QkuOaEioXTkgWNiitr00ql/YLlCMKC8TsFNNGb+PFQyGFuNcQhXoMpJ5ihcRgEfM6yYRAtEGNMhPeEiEFKj1flZ+hWiaK8gqBrsv5urzuyVp3ZHVTI6SN9tcsrfDXOd9WtzomM/acReR5m9JTvT1vBVwv5C+u4/95dB/xVRClZ2Fl/l8rp3hTWG6nHj9RxNJoO1xpm5P3yx/Wj8e5wt4uRjONZWPKXAs4lbH3aVEd5RHccV2gLdxItedNtVhWouu/58X9lNp+vWQxeTircaVvM6fmr/TG3aHM6o8+filq/UqUMjsDkReObvZbiNosV2G6qtlLHmVTdeuL6UsHf/IHhuJZXdZvVCGmzYr1qvMia7fu3T+rF17TdqgD59qa5CpldDfIvC++HMR1evPBvaNMWrzAUI9vi+4laKWOn4Y8LPjC3yzdiwJzysxtGVaNtEcf+EWJk+WYS4IeaoRT5WzYBvLIB2fruDhNUumTByQXPx3QFy+d78q7889aKnPlhb5wZ8GujtKaTJ8RqUxbXGu3Qg3jHMahZdHpp26jhmRZXf+6Gmig6vZ4SbmT2EdS3VW5S7cc5umT81FmvaC+7rQ26X9KvKVGt/8VgAMhoo33PHuoZOoq+6WqC99PxgFcMdR9bVfk7TTU+UNXpD8SBzkw44dwtyj2UJkcsk+eKf/nEOWpJDdR9BSCFJJfigPeN/BBsD5FyxQTYpsIuoWCmxju3QtfhJrhYEfx/ZGq3cK9KOCL0BnUcJd+/BH5YAMbZ0ZEYo0Jd4HSn0aidEM2UhEzhTZSGTNFNlKR4+CoFduEd+UG2PraeDfC4G4o4IgK2w0HR/RViFt1T/hW39jZcMQzI8IHGu9QA9w5TXh2UPCh1D+Yoo261/gOv9GThX/dhjgotfF9pSf2+k9AhVSIDxVSIT5USIX4UCEV4kOFVIgPFVIhPlRIhfhQIRXiQ4VUiA8VUiE+VEiF+FAhFeJDhVSIz9cr/AF79V2yoD2oxQAAAABJRU5ErkJggg==',
                }}                      
        >
              <TouchableOpacity onPress={() => ImagePicker.showImagePicker(imagePickerOptions, imagePickerCallback) }>                       
                        <Feather name="upload-cloud" size={48} color="white"  />
                    </TouchableOpacity>
     </ImageBackground>
        <View style={{
          marginTop: 24,
          justifyContent: 'center',
          alignItems  :'center'
        }}>          
        </View>
        
        <Formik
              validationSchema={loginValidationSchema}
              initialValues={{ title: '', description: '', module: '', }}
              onSubmit={values => saveModule(values)}
            >
              {({ handleChange, handleBlur, handleSubmit, errors, touched, isValid,values }) => 
                (
        <View style={{
          alignItems: "center"
        }}>          
            
            <TextInput
            style={styles.input}
            name="title"
            placeholder = 'Titulo do Topico'
            placeholderTextColor="#292929" 
            onChangeText={handleChange('title')}
            onBlur={handleBlur('title')}
            value={values.title}
            />
            {(errors.title && touched.title) &&
                          <Text style={styles.errorText}>{errors.title}</Text>
                        }
             <TextInput
            style={styles.input}
            name="description"
            placeholder = 'Descrição'
            placeholderTextColor="#292929" 
            onChangeText={handleChange('description')}
            onBlur={handleBlur('description')}
            value={values.description}       
            />

            {(errors.description && touched.description) &&
                          <Text style={styles.errorText}>{errors.description}</Text>
                        }

            <Picker
              selectedValue={values.module}
              style={{ height: 50, width: 150 }}
              onValueChange={handleChange('module')}
            >
            <Picker.Item label="-- Selecione um valor --" value="" />
            {
              modules.map((item,i) => {
                return (
                 
                  <Picker.Item key={i} label={item.title} value={""+item.id} />
                );
              })
            }
              
            </Picker>
            {(errors.module && touched.module) &&
                          <Text style={styles.errorText}>{errors.module}</Text>
                        }
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Salvar</Text>                
          </TouchableOpacity>
          
      </View>
        ) 
      }
    </Formik>
      </View>
      </ScrollView>
    </View>
  );
}
