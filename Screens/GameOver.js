import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'

import Card from '../Components/Card';
import Theme from '../Constants/Theme';

import { widthToDp, heightToDp } from '../LetMeAdjust';

const GameOver = (props) => {

    const {alphabet,deviceName,rounds,onPlayAgain} = props;

    return (
        <View style={styles.container}>

            <Image 
                source={require('../assets/congrats.png')} 
                fadeDuration={5} 
                style={styles.image}
            />

            <Text style={styles.title}> Game is Over!</Text>

            <Card style={styles.dataContainer}>

                <Text style={styles.subTitle}> Letter was <Text style={styles.highlight}>{alphabet}</Text></Text>

                <Text style={styles.subTitle}> 
                    <Text style={styles.highlight}>{deviceName}</Text> took <Text style={styles.highlight}>{rounds} rounds</Text> to guess right alphabet!
                </Text>

                <View style={{width:widthToDp('35')}}>  
                    <Button title="Play Again" color={Theme.headerBgColor} onPress={onPlayAgain}/>
                </View>

            </Card>

        </View>
    )
}

export default GameOver

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        width:"100%",
        justifyContent:"center"
    },
    image:{
        width:widthToDp('96'),
        height:heightToDp('17.05')
    },    
    title:{
        fontSize:widthToDp('6%'),
        fontWeight:"bold",
        marginTop:heightToDp('2'),
    },
    subTitle:{
        fontSize:widthToDp('4%'), 
        textAlign:"center"
    },
    dataContainer:{
        justifyContent:"space-around",
        alignItems:"center",
        width:widthToDp('89'),
        height:heightToDp('25'),
        marginVertical:heightToDp('2'),
        paddingHorizontal:widthToDp('2'),
        borderTopLeftRadius:widthToDp('8'),
        borderBottomRightRadius:widthToDp('8'),
    },
    highlight:{
        color:Theme.headerBgColor,
        fontWeight:"bold"
    }
})
