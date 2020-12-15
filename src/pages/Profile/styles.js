const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({

    avatar: {
      width: 130,
      height: 130,
      borderRadius: 65,
    },    
  btnCam: {
      marginTop: -25,
      marginLeft: 65,
      backgroundColor: '#292929',
      opacity: 0.4,
      borderRadius: 20,
      width: 40,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
  },
  btncamIcon: {
    opacity: 0.8,
  },
  
  input: {
    marginTop: 18,
    width: 246,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#000",

    fontFamily: "Roboto-Regular",
    fontSize: 17,
    backgroundColor:"#F4F6F8",  
    lineHeight: 21,
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
      fontFamily: "Roboto-Bold",
      fontSize: 20,
      lineHeight: 25,
      textTransform: "uppercase",
      color: "#FFFFFF"
  },
  });
  
  export default styles;