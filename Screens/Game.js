import React, { useState, useEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import Card from '../Components/Card';
import { widthToDp, heightToDp } from '../LetMeAdjust';
import Theme from '../Constants/Theme';

const Game = (props) => {

    const [ phoneGuess, setPhoneGuess ] = useState(generateRandom(26));
    const [ rounds, setRounds ] = useState(0);

    const { alphabet, deviceName, onGameOver } = props;

    function generateRandom(length){
        const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            result = randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }

    const nextGuessHandler = () => {
        const nextGuess = generateRandom(26);
        setPhoneGuess(nextGuess);
        setRounds((curRound) => curRound + 1);
    }

    useEffect(() => {
        if(alphabet === phoneGuess){
            onGameOver(rounds);
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.title}> {deviceName}'s Guess Is </Text>
            <Card style={styles.guessContainer}>
                <Text style={{fontSize:widthToDp('15%'), fontWeight:"bold"}}> {phoneGuess} </Text>
            </Card>
            <View style={{width:widthToDp('50%')}}>
                <Button title="Try to Guess Again !" onPress={nextGuessHandler} color={Theme.headerBgColor}/>
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
        fontSize:widthToDp('6%'),
        fontWeight:"bold"
    },
    guessContainer:{
        width:widthToDp('30%'),
        height:heightToDp('15%'),
        borderTopLeftRadius:widthToDp('8'),
        borderBottomRightRadius:widthToDp('8'),
        elevation:8,
        alignItems:"center",
        justifyContent:"center",
        marginVertical:heightToDp('5'),
        marginHorizontal:widthToDp('5')
    }
})
