import { View, Text, StyleSheet } from "react-native";

const NumberContainer = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.guessNum}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        borderColor: "#B71375",
        borderWidth: 2,
        width: "65%",
        margin: 20,
        padding: 20,
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: "#B71375"
    }
});

export default NumberContainer;