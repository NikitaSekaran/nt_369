import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { Colors, CommonStyles } from '../../res'
import { deviceHeight, deviceWidth } from '../../utils/ScreenRatio'

const AppLoader = ({isLoading}) => {
  return (
    <View style={[CommonStyles.contentContainerStyle, {zIndex: 1,width: deviceWidth, height: deviceHeight, backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'absolute',}]}>
      <ActivityIndicator animating={isLoading} color={Colors.primary} size={30} style={{width: 60, height: 60, borderRadius: 8, backgroundColor: Colors.white}}/>
    </View>
  )
}

export default AppLoader