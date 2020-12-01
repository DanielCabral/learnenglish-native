import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 24,        
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
    level:{
        flex: 1,
        alignItems: 'flex-start',  
        justifyContent: 'flex-start'      
    },
    levelTitle: {
        fontFamily: "Pacifico",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        lineHeight: 32,
        color: "#000000"
    },
    levelSubTitle: {

    }
}
);
export default styles;