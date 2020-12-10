import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 24,
        paddingTop: 14        
    },
    titleView: {
        alignItems: 'center',
    },
    title:{
        marginTop: 18,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.03
    },
    module:{
        marginTop: 18,
        flex: 1,
        alignItems: 'flex-start',  
        justifyContent: 'flex-start'      
    },
    moduleTitle: {
        height: 32,

        fontFamily: "Pacifico-Regular",
        
        fontSize: 18,
        lineHeight: 32,
        color: "#000000"
    },
    lesson: {
        width: "100%",
        height: 20,
        marginBottom: 16, 
        flexDirection: "row",   
        justifyContent: "space-between",            
    },
    nameLesson: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 20,
        justifyContent: "center", 
        color: "#000000",
        opacity: 0.8
    },
    statusLesson: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 20,
        color: "#0BAC4C"
    },
    finalizada: {
        color: "#0BAC4C"
    },
    andamento: {
        color: "#F9A828"
    },
    naoiniciada: {
        color: "#F22936"
    }
}
);
export default styles;