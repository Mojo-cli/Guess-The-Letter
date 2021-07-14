import React, {useState} from 'react'
import { StyleSheet, Text, SafeAreaView, TextInput, View, Alert, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'

import { widthToDp, heightToDp } from '../LetMeAdjust'
import Card from '../Components/Card'
import Theme from '../Constants/Theme'

const StartGame = (props) => {

    const [ deviceName, setDeviceName ] = useState('');
    const [ showDInfoBox, setShowDInfoBox  ] = useState(true);
    const [ alphabet, setAlphabet ] = useState('');

    const proceedHandler = () => {
        if(deviceName){
            setShowDInfoBox(false);
        }else{
            return Alert.alert("Name Field Is Empty !", "Please enter your device's name.", [{text:"Sure", style:"destructive"}]);
        }
    }

    const resetHandler = () => {
        setDeviceName('');
        setShowDInfoBox(true);
        setAlphabet('');
    }

    const alphabetIpHandler = inputText => {
        setAlphabet(inputText.replace(/[^A-Z]/g, ''));
    }

    const confirmHandler = () => {
        if(alphabet && deviceName){
            onConfirm(alphabet, deviceName);
        }else{
            Alert.alert("Alphabet Field Is Empty !", "Please choose an alphabet.", [{text:"Sure", style:"destructive"}]);
        }
    }

    const showDeviceBox = <Card style={styles.deviceInfoContainer}>
                            <Text style={{fontSize:21, color:"black", fontWeight:"bold"}}> Enter Device Name</Text>
                            <TextInput 
                                placeholder=""
                                style={styles.deviceInputContainer}
                                value={deviceName}
                                onChangeText={(text)=>setDeviceName(text)}
                            />
                            <View style={{width:widthToDp('20')}}>
                                <Button title="Proceed" color={Theme.headerBgColor} onPress={proceedHandler}/>
                            </View>
    </Card>

    const showLetterBox = <Card style={styles.letterInfoContainer}>
                            <Text style={{fontSize:21, color:"black", fontWeight:"bold"}}> Choose Alphabate</Text>
                            <TextInput 
                                placeholder=""
                                style={styles.letterInputContainer}
                                maxLength={1}
                                value={alphabet}
                                onChangeText={alphabetIpHandler}
                            />
                            <View style={styles.buttonContainer}>
                                <View style={{width:widthToDp('20')}}>
                                <Button title="Reset" color={Theme.headerBgColor} onPress={resetHandler}/>
                                </View>
                                <View style={{width:widthToDp('20')}}>
                                <Button title="Confirm" color={Theme.headerBgColor} onPress={confirmHandler}/>
                                </View>
                            </View>
    </Card>

    let content =  showDeviceBox;

    if(showDInfoBox === false){
        content = showLetterBox;
    }else{
       content = showDeviceBox;
    }

    const { onConfirm } = props;

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                {content}
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default StartGame

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        padding:25,
        width:"100%",
        justifyContent:"center"
    },
    deviceInfoContainer:{
        height:heightToDp('20'),
        justifyContent:"space-around",
        alignItems:"center",
        borderBottomLeftRadius:20,
        borderTopRightRadius:20,
        elevation:8
    },
    deviceInputContainer:{
        width:widthToDp('45'),
        height:35,
        borderBottomWidth:1,
        textAlign:"center",
        fontSize:widthToDp('4.5')
    },
    letterInfoContainer:{
        height:heightToDp('20'),
        justifyContent:"space-around",
        alignItems:"center",
        borderBottomLeftRadius:20,
        borderTopRightRadius:20,
        elevation:8
    },    
    letterInputContainer:{
        width:widthToDp('18'),
        height:35,
        borderBottomWidth:1,
        textAlign:"center",
        fontSize:21,
        fontWeight:"bold"
    },
    buttonContainer:{
        flexDirection:"row",
        width:widthToDp('65'),
        justifyContent:"space-between"
    }
})
