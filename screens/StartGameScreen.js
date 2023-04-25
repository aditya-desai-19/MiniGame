import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
    return (
        <View style={styles.container}>
            <TextInput />
            <PrimaryButton >Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 80,
        marginHorizontal: 20,
        alignItems:"center",
        backgroundColor: "#B71375",
        borderRadius: 10,
        // Shadow
        elevation: 10,
        shadowColor: "black",
        shadowOffset: { width:0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 10
    }
});

export default StartGameScreen;