import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import  MaterialCommunityIcons from "react-native-vector-icons/MaterialIcons";
import {Colors} from '../../res';
import {deviceWidth, moderateScale, scale} from '../../utils/ScreenRatio';

const AppHeader = ({
  headerText,
  onBackPress,
  showBackButton,
  showMenuIcon = false,
  onMenuPress,
}) => {
  return (
    <View style={styles.container}>
      {(showBackButton || showMenuIcon) && (
        <TouchableOpacity
          color={Colors.white}
          style={styles.backButton}
          onPress={() => (showBackButton ? onBackPress() : onMenuPress())}>
          <Icon
            color={Colors.white}
            name={showBackButton ? 'chevron-back' : 'menu'}
            size={32}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.headerText}>{headerText}</Text>
      <TouchableOpacity color={Colors.white} style={styles.backButton}>
      <MaterialCommunityIcons
            name="notifications"
            size={25}
            color={Colors.white}
          />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    backgroundColor: '#36c0ff',
    // padding: moderateScale(10),
    paddingTop:20,
    paddingHorizontal:15,
    width: deviceWidth,
    height: scale(60),
    borderBottomLeftRadius: moderateScale(18),
    borderBottomRightRadius: moderateScale(18),
  },
  headerText: {
    fontSize: moderateScale(18),
    color: Colors.white,
  },
  backButton: {
    // position: 'absolute',
    // left: moderateScale(20),
  },
});

export default AppHeader;
