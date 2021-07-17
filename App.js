import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Header from './Components/Header';

import StartGame from './Screens/StartGame';
import Game from './Screens/Game';
import GameOver from './Screens/GameOver';

export default function App() {

  const [ passAlphabet, setPassAlphabet ] = useState('');
  const [ passDName, setPassDName ] = useState('');
  const [ passRounds, setPassRounds ] = useState(0);

  const giveMeData = (alpha, device) => {
    setPassAlphabet(alpha);
    setPassDName(device);
  }

  const giveMeRounds = numOfRounds => {
    setPassRounds(numOfRounds);
  }

  const playAgainHandler = () =>{
    setPassAlphabet('');
    setPassDName('');
    setPassRounds(0);
  }

  let content = <StartGame onConfirm={giveMeData}/>;

  if(passAlphabet && passRounds<=0){
    content = <Game alphabet={passAlphabet} deviceName={passDName} onGameOver={giveMeRounds}/>
  }else if(passRounds>0){
    content = <GameOver rounds={passRounds} alphabet={passAlphabet} deviceName={passDName} onPlayAgain={playAgainHandler}/>
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#3C5186"/>
      <Header title="Letter Guessing Game"/>
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
  }
}) 


