import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,        
        justifyContent: 'flex-start',        
        backgroundColor: '#14213D',
    },
    arrowleft: {
        position: 'absolute',
        left:10,
        top:10
    },
    heart: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    buttonsView: {
        marginTop: 12,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonDisabled: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        opacity: 0.4
    },
    text: {
        marginHorizontal: 5,
        fontFamily:"Roboto",
        fontStyle:"normal",
        fontWeight:"bold",
        fontSize:12,
        lineHeight: 14,
        color:"#FFFFFF"
    },
    
    description : {
        paddingRight: 10,
        paddingLeft: 10,
        marginTop: 32,
        width: '100%',
    },
    titleAndProfile: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {

        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 12,
        lineHeight: 14,
        color: "#FFFFFF" 
    },
    imageProfile: {
        marginLeft: 10,
        width: 28,
        height: 28,
        borderRadius: 28/2,
    },
    textDescription: {
        marginTop: 10,

        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        lineHeight: 14,
        display: "flex",
        alignItems: "center",        
        color: "#FFFFFF"
    }
}
);
export default styles;