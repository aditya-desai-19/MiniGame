import { View, Text, StyleSheet, Dimensions } from "react-native";

const NumberContainer = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.guessNum}</Text>
        </View>
    )
}

// Dimensions API: it is used to set dynamic dimensions such as margin or padding based on screen size
//object of dimensions API
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        borderColor: "#B71375",
        borderWidth: 2,
        width: "65%",
        margin: deviceWidth < 380 ? 10: 20,
        padding: deviceWidth < 380 ? 10: 20,
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: "#B71375"
    }
});

export default NumberContainer;