import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Header from './Components/Header';

import StartGame from './Screens/StartGame';
import Game from './Screens/Game';

export default function App() {

  const [ passAlphabet, setPassAlphabet ] = useState('');
  const [ passDName, setPassDName ] = useState('');

  const giveMeData = (alpha, device) => {
    setPassAlphabet(alpha);
    setPassDName(device);
  }

  let content = <StartGame onConfirm={giveMeData}/>;

  if(passAlphabet && passDName){
    content = <Game alphabet={passAlphabet} deviceName={passDName}/>
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


