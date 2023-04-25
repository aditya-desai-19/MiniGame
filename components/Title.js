import {View, Text, StyleSheet} from 'react-native'

const Title = () => {
    
    return(
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Guess My Number</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        height: 150,
        width: 250,
        borderColor: "white",
        borderWidth: 3,
        borderRadius: 5,
        marginTop: 100, 
        justifyContent: "center",
        alignSelf:"center"
    },
    titleText: {
        fontSize: 20,
        fontStyle: "italic",
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
    },
});
export default Title;