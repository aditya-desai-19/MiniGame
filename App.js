import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import Title from './components/Title';

const App = () => {
  return (
    <View style={styles.screenContainer}>
      <ImageBackground 
        source={require("./images/number.jpg")}
        resizeMode='cover'
        style={styles.imgback}
        imageStyle={styles.imgstyle}
      >
        <Title />
        <StartGameScreen />
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
