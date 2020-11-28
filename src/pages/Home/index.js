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

export default function Home({ navigation, route }) {
    return (
        <PaperProvider theme={theme}>
          <Header navigation={navigation}>
          </Header>           
          <FAB
            style={styles.fab}
            small
            icon="plus"
            onPress={() => console.log('Pressed')}
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