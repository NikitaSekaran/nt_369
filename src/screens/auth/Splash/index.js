import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import MainFrameView from '../../../common/components/MainFrameView';
import {Colors, CommonStyles, Fonts, Images} from '../../../common/res';
import {moderateScale} from '../../../common/utils/ScreenRatio';

const Splash = () => {
  return (
    // <MainFrameView containerStyle={CommonStyles.centerContent}>
    <View style={{flex: 1}}>
      <ImageBackground
        source={Images.Splash}
        style={{width: '100%', height: '100%'}}/>
    </View>
    // </MainFrameView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.mistralRegular,
    color: Colors.primary,
  },
  rowContainer: {
    // flex: 1,
    // flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default Splash;
