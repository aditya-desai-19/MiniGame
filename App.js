import React, { useState } from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import Title from './components/Title';
import GameScreen from './screens/GameScreen';

const App = () => {
  const[userNumber, setUserNumber] = useState();

  const pickNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPick={pickNumberHandler}/>

  if(userNumber){
    screen = <GameScreen />
  }
  
  return (
    <View style={styles.screenContainer}>
      <ImageBackground 
        source={require("./images/number.jpg")}
        resizeMode='cover'
        style={styles.imgback}
        imageStyle={styles.imgstyle}
      >
        <Title />
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
