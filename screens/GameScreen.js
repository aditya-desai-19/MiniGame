import { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Alert, FlatList} from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

//Generation of random number
const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude);
    }else{
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = (props) => {
    const initialGuess = generateRandomBetween(1,100, props.correctNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessLogRounds, setGuessLogRounds] = useState('');

    //UseEffect for GameOver
    useEffect(() => {
        if(currentGuess === props.correctNumber){
            props.onGameOver(guessLogRounds.length);
        }}, [currentGuess, props.correctNumber, props.onGameOver]
    );

    // UseEffect for resetting minBoundary and maxBoundary
    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    function nextGuessHandler(direction){
        if(
            (direction === 'lower' && currentGuess < props.correctNumber) || 
            (direction === 'upper' && currentGuess > props.correctNumber)
        ){
            Alert.alert("Invalid guess", "You know this is wrong!", {text: 'Sorry', style: 'cancel'});
            return;
        }

        if(direction === 'lower'){
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRandomNumber = Math.floor(Math.random() * (maxBoundary-minBoundary)) + minBoundary;
        setCurrentGuess(newRandomNumber);
        setGuessLogRounds(prevLogsRounds => [newRandomNumber, ...prevLogsRounds]);
    }

    console.log(minBoundary);
    console.log(maxBoundary);
     
    return(
        <View style={styles.mainContainer}>
            <Title screenTitle="Opponent's Guess" />
            <NumberContainer guessNum={currentGuess}/>
            <View style={styles.decisionContainer}>
                <Text style={styles.decisionText}>Higher or Lower</Text>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onClick={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    <PrimaryButton onClick={nextGuessHandler.bind(this, 'upper')}>+</PrimaryButton>
                </View>
            </View>
            <View style={styles.logContainer}>
                {/* {guessLogRounds.map((guessLogRound) => <Text key={guessLogRound}>{guessLogRound}</Text>)} */}
                <FlatList
                    data={guessLogRounds}
                    renderItem={(itemData) => <Text style={styles.logRounds}>{itemData.item}</Text>}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100
    },
    decisionContainer: {
        width: "65%",
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:2,
        borderColor: '#B71375',
        backgroundColor: "#B71375",
        borderRadius: 10,
        padding: 30
    },
    decisionText: {
        fontSize: 20,
        fontWeight: "bold",
        color: 'white'
    },
    buttonContainer: {
        flexDirection: "row",
    },
    logContainer: {
        flex:1,
        marginVertical: 10
    },
    logRounds: {
        textAlign: "center",
        margin: 10,
        borderRadius: 20,
        width: 80,
        backgroundColor: "#B71375",
        padding: 10,
        color: "#F7D060"
    }
});

export default GameScreen;