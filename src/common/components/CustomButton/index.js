import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { deviceWidth, moderateScale, scale } from '../../utils/ScreenRatio'
import { Colors } from '../../res'

const CustomButton = ({buttonContainerStyle, buttonTextStyle, buttonText, onButtonPress, isDisabled = false, opacity = 1}) => {
  return (
    <TouchableOpacity onPress={onButtonPress} disabled={isDisabled} style={[styles.buttonContainer, buttonContainerStyle, {opacity: opacity}]}>
      <Text style={[styles.defaultButtonTextStyle, buttonTextStyle]}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: scale(40),
        width: deviceWidth/2,
        borderRadius: scale(22),
        backgroundColor: Colors.primary,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    defaultButtonTextStyle: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: moderateScale(15)
    }
})

export default CustomButton