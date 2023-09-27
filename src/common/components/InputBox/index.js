import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Colors, CommonStyles} from '../../res';
import {deviceWidth, moderateScale, scale} from '../../utils/ScreenRatio';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-paper';

const InputBox = ({
  value,
  onChangeText,
  placeholder,
  isFocus,
  width,
  style,
  iconStyle,
  secureTextEntry = false,
  showRightIcon = false,
  iconName = '',
  onIconPress,
  editable = true,
  keyboardType = 'default',
  maxLength,
}) => {
  const [isHideEyeIcon, setIsHideEyeIcon] = useState(true);

  return (
    <View
    // style={{
    //   ...CommonStyles.inputBoxStyle,
    //   // width: width ?? deviceWidth / 1.15,
    //   ...style,
    // }}
    >
      <TextInput
        value={value}
        onChangeText={onChangeText}
        label={placeholder}
        selectionColor={Colors.primary}
        activeUnderlineColor={Colors.primary}
        underlineColor={Colors.light_grey}
        editable={editable}
        keyboardType={keyboardType}
        maxLength={maxLength}
        style={[
          {
            borderBottomWidth: 0.2,
            fontSize: moderateScale(13),
            minWidth: deviceWidth / 1.2,
            backgroundColor: 'transparent',
            alignSelf: 'center',
            paddingHorizontal: 0,
            paddingVertical: moderateScale(6),
            ...style,
          },
          width && {width: width, minWidth: width},
        ]}
        // placeholder={placeholder}
        secureTextEntry={secureTextEntry ? isHideEyeIcon : false}
        // numberOfLines={1}
      />
      {showRightIcon && (
        <TouchableOpacity
          style={{padding: moderateScale(6)}}
          onPress={() =>
            secureTextEntry ? setIsHideEyeIcon(!isHideEyeIcon) : onIconPress()
          }>
          {iconName?.length == 0 ? (
            <Image
              style={{
                position: 'absolute',
                width: moderateScale(15),
                height: moderateScale(15),
                marginTop: moderateScale(-30),
                ...iconStyle,
              }}
              source={
                !isHideEyeIcon
                  ? require('../../../assets/img/view.png')
                  : require('../../../assets/img/hide.png')
              }
            />
          ) : (
            <Icon
              name={iconName}
              size={moderateScale(15)}
              style={{
                position: 'absolute',
                width: moderateScale(15),
                height: moderateScale(15),
                marginTop: moderateScale(-30),
                ...iconStyle,
              }}
            />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputBox;
