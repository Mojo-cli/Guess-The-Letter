import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import Card from '../Components/Card';

const Game = (props) => {

    const [ phoneGuess, setPhoneGuess ] = useState(generateRandom(26));

    const { alphabet, deviceName } = props;

    function generateRandom(length){
        const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            result = randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }

    const nextGuessHandler = () => {
        setPhoneGuess(generateRandom(26));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}> {deviceName}'s Guess Is </Text>
            <Card style={styles.guessContainer}>
                <Text style={{fontSize:40, fontWeight:"bold"}}> {phoneGuess} </Text>
            </Card>
            <View style={{width:150}}>
                <Button title="Try to Guess Again !" onPress={nextGuessHandler} />
            </View>
        </View>
    )
}

export default Game

const styles = StyleSheet.create({    
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        padding:25,
        width:"100%",
        justifyContent:"center"
    },
    title:{
        fontSize:21,
        fontWeight:"bold"
    },
    guessContainer:{
        width:100,
        height:100,
        borderTopLeftRadius:20,
        borderBottomRightRadius:20,
        elevation:8,
        alignItems:"center",
        justifyContent:"center",
        margin:20
    }
})
