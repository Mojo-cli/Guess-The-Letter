import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Theme from '../Constants/Theme'

import { widthToDp, heightToDp } from '../LetMeAdjust'

const Card = (props) => {
    return (
        <View style={{...styles.cardBg, ...props.style}}>
            {props.children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    cardBg:{
        backgroundColor:Theme.cardBg,
        height:250,
        width:widthToDp('75%'),
    }
})
