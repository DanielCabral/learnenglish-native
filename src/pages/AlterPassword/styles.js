import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#14213D',
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
        fontSize: 14,
        lineHeight: 20,
        /* or 143% */

        marginTop:24,
        paddingHorizontal:24,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: 0.03
    },
    input: {
        marginTop: 18,
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

}
);
export default styles;