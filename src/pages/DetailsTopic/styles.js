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
        fontFamily: 'Roboto-Regular',
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

        fontFamily: "Roboto-Regular",
        
        fontSize: 22,
        marginBottom: 18,
        lineHeight: 32,
        color: "#000000"
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    lessonContainer: {       
        //maxWidth: '100%',
        //height: 20,
        width:'100%',
        marginBottom: 24,         
        flexDirection: "column",  
        //justifyContent: "space-between",            
    },
    lesson: {
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    nameLesson: {  
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        lineHeight: 20,
        marginBottom: 18,
        color: "#000000",
        opacity: 0.8
    },
    statusLesson: {
        fontFamily: "Roboto-Bold",
        fontSize: 16,
        marginBottom: 18,
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