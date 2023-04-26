import { View, Text, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";

const GameOverScreen = () => {
    return (
        <View>
            <Title screenTitle="Game Over"/>
            <View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require("../images/success.png")} />
                </View>
            <Text>Your phone took X rounds to guess Y</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imageContainer: {
        marginTop: 30,
        marginLeft: 90,
        height: 200,
        width: 200,
        borderRadius: 100,
        overflow: "hidden",
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: "100%",
        width: "100%"
    }
});

export default GameOverScreen;