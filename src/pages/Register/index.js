import React from 'react'
import { StyleSheet } from 'react-native';
import { Appbar, Button, DefaultTheme, FAB, HelperText, Provider as PaperProvider, TextInput } from 'react-native-paper';


const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      accent: 'yellow',
    },
  };

export default function Register() {
    return (
        <PaperProvider theme={theme}>
          <Appbar.Header>
      <Appbar.BackAction />
      <Appbar.Content title="Title" subtitle="Subtitle" />
      <Appbar.Action icon="magnify" />
      <Appbar.Action icon="dots-vertical" />
    </Appbar.Header>
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