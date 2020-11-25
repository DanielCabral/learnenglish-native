import React from 'react'
import { StyleSheet } from 'react-native';
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

export default function Register() {
    return (
        <PaperProvider theme={theme}>
              <Header>
          </Header> 
          <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
            Press me
          </Button>
          <FAB
            style={styles.fab}
            small
            icon="plus"
            onPress={() => console.log('Pressed')}
          />
           <TextInput
      label="Email"
      //value={text}
      //onChangeText={text => setText(text)}
    />
          <HelperText type="error">
        Email address is invalid!
      </HelperText>
      <Searchbar
      placeholder="Search"
    
    />
      </PaperProvider>
    )
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});