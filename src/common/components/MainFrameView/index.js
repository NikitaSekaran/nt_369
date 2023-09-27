import { View, Text, SafeAreaView, StatusBar, ScrollView, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Colors, CommonStyles } from '../../res'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const MainFrameView = ({children, containerStyle, contentContainerStyle, enableScroll = true}) => {
  return (
    <View style={[CommonStyles.container, containerStyle]}
    // keyboardShouldPersistTaps={'always'}  contentContainerStyle={[CommonStyles.contentContainerStyle, contentContainerStyle]}
    >
      <SafeAreaView/>
      <StatusBar backgroundColor={Colors.primary} barStyle={'light-content'}/>
      {/* {header} */}
      {children}
    </View>
  )
}

export default MainFrameView