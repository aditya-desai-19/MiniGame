import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = (props) => {
    return (
        <View>
            <Title screenTitle="Game Over"/>
            <View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require("../images/success.png")} />
                </View>
            <Text style={styles.successText}>
                Your phone took  
                <Text style={styles.highlightText}> {props.rounds} </Text> 
                rounds to guess 
                <Text style={styles.highlightText}> {props.userNumber} </Text>
            </Text>
            </View>
            <View style={styles.newGamebtnContainer}>
                <PrimaryButton onClick={props.startNewGame}>Start new game</PrimaryButton>
            </View>
        </View>
    )
}

const dimensionWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imageContainer: {
        marginLeft: 90,
        marginVertical: 30,
        height: dimensionWidth < 380 ? 100 : 200,
        width: dimensionWidth < 380 ? 100 : 200,
        borderRadius: dimensionWidth < 380 ? 50 : 100,
        overflow: "hidden",
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: "100%",
        width: "100%"
    },
    successText: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Roboto-Regular.ttf",
        margin: 10,
        textAlign: "center",
    },
    highlightText: {
        color: "#B71375"
    },
    newGamebtnContainer: {
        marginLeft: 100,
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
    }
});

export default GameOverScreen;