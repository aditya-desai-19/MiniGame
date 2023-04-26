import React, { useState } from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const App = () => {
  const[userNumber, setUserNumber] = useState();
  const[isGameOver, setIsGameOver] = useState(true);

  const pickNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  }

  const gameOverHandler = () => {
    setIsGameOver(true);
  }

  let screen = <StartGameScreen onPick={pickNumberHandler}/>

  if(userNumber){
    screen = <GameScreen correctNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if(isGameOver && userNumber){
    screen = <GameOverScreen />
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
