import {View, Text, StyleSheet} from 'react-native'

const Title = (props) => {
    
    return(
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{props.screenTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        height: 100,
        width: 250,
        borderColor: "white",
        borderWidth: 3,
        borderRadius: 5,
        marginTop: 50, 
        justifyContent: "center",
        alignSelf:"center"
    },
    titleText: {
        fontSize: 25,
        fontFamily: "Roboto-Regular",
        // fontStyle: "italic",
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
    },
});
export default Title;