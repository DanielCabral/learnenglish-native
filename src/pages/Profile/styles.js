const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },    
    input: {
      backgroundColor: 'red',
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
  });
  
  export default styles;