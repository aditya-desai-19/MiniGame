import { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = ({onPick}) => {

    const[enteredNumber, setEnteredNumber] = useState('');

    const textHandler = (newValue) => {
        setEnteredNumber(newValue);
    };

    const resetTextHandler = () => {
        setEnteredNumber('');
    };

    const confirmHandler = () => {
        const choosenNumber = parseInt(enteredNumber);

        if(isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber >= 100) {
            Alert.alert('Invalid Number',
                'Enter a number which is between 0 and 100',
                [{
                    text: 'OK',
                    onPress: resetTextHandler,
                    style: 'cancel'
                }]
            );
            return;
        } else {
            onPick(choosenNumber);
        }

    };

    return (
        <View style={styles.container}>
                {/* max-lenght: restricts user to input only 2 input */}
                {/* keyboardType: sets keyboard to specified type */}
                <TextInput 
                    style={styles.input} 
                    maxLength={2} 
                    keyboardType="number-pad"
                    onChangeText={textHandler}
                    value={enteredNumber}
                    />
                <View style={styles.buttonContainer}>
                    <PrimaryButton onClick={resetTextHandler}>Reset</PrimaryButton>
                    <PrimaryButton onClick={confirmHandler}>Confirm</PrimaryButton>
                </View>
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
    },
    input:{
        height: 50,
        width: 60,
        fontSize: 30,
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: "#F7D060",
        marginVertical: 10,
        color: "#F7D060"
    },
    buttonContainer:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10
    }
});

export default StartGameScreen;