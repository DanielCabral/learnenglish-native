import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 24,
        backgroundColor: '#14213D',
    },
    containerFormAndRegister: {
        flex: 1,
        justifyContent: 'space-between'
    },
    labelContainer: {
        marginBottom: 20
    },
    header: {
        marginTop: 72,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
        backgroundColor: '#14213D',
    },
    headerImage: {
        width: '100%',
        height: '100%',
        backgroundColor: '#14213D',
    },
    grettingsText: {
        color: '#FFF',
        fontFamily: 'Roboto-Regular',
        marginTop:24,
        paddingHorizontal:24,
        fontSize: 14,
        lineHeight: 20,
        /* or 143% */

        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: 0.03
    },
    input: {
        marginTop: 24,
        width: 246,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        opacity: 0.98,

        fontFamily: "Roboto-Regular",
        fontSize: 17,
        lineHeight: 21,
        display: "flex",
        alignItems: "center",
        color: "#FFF"
    },
    button: {
        marginTop: 48,
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
    text: {
        marginTop: 24, 
        fontFamily: "Roboto-Regular",
        fontSize: 14,
        lineHeight: 16,
        display: "flex",
        alignItems: "center",
        color: "white",
    },
    containeRegister: {     
        paddingBottom: 24,
        alignItems: "center",
        color: "white",
    },
    link: {
        textDecorationLine: "underline",
        fontWeight: 'bold',        
    },
    errorText: {
        fontSize: 14,
        color: 'white',
        marginTop: 5
    },

}
);
export default styles;