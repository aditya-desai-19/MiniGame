import React, { useState } from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const App = () => {
  const[userNumber, setUserNumber] = useState();
  const[isGameOver, setIsGameOver] = useState(true);
  const[guessRounds, setGuessRounds] = useState(0);

  const pickNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  }

  const gameOverHandler = (noOfRounds) => {
    setIsGameOver(true);
    setGuessRounds(noOfRounds);
  }

  const startGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  let screen = <StartGameScreen onPick={pickNumberHandler}/>

  if(userNumber){
    screen = <GameScreen correctNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if(isGameOver && userNumber){
    screen = <GameOverScreen userNumber={userNumber} rounds={guessRounds} startNewGame={startGameHandler} />
  }
  
  return (
    <View style={styles.screenContainer}>
      <ImageBackground 
        source={require("./images/number.jpg")}
        resizeMode='cover'
        style={styles.imgback}
        imageStyle={styles.imgstyle}
      >
        {screen}
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#F7D060"
  },
  imgback: {
    width: "100%",
    height: "100%"
  },
  imgstyle: {
    opacity: 0.25
  }
});

export default App;
