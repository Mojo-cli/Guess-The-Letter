import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Theme from '../Constants/Theme'
import { heightToDp, widthToDp } from '../LetMeAdjust'

const Header = (props) => {
    return (
        <View style={styles.headerBackground}> 
            <Text style={styles.titleText}>{props.title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerBackground:{
        width:"100%",
        height:heightToDp('8'),
        backgroundColor:Theme.headerBgColor,
        alignItems:"center",
        justifyContent:"center",
        paddingTop:heightToDp('2')
    },
    titleText:{
        fontSize:widthToDp('5'),
        fontWeight:"bold",
        color:Theme.textColor
    }
})
