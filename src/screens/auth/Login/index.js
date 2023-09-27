import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
  ToastAndroid,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainFrameView from '../../../common/components/MainFrameView';
import {Colors, CommonStyles, Images, Strings} from '../../../common/res';
import {
  deviceWidth,
  moderateScale,
  scale,
} from '../../../common/utils/ScreenRatio';
import InputBox from '../../../common/components/InputBox';
import CustomButton from '../../../common/components/CustomButton';
import Register from '../Register';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppLoader from '../../../common/components/AppLoader';
import {isValidPassword} from '../../../common/utils/utils';

const Login = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isBtnEnable, setBtnEnable] = useState(false);

  const navigation = useNavigation();

  const onTextValueChange = (key, value) => {
    if (key == 'phone') {
      setPhone(value);
    } else {
      setPassword(value);
    }
  };

  const onLoginButtonPress = () => {
    ToastAndroid.show('Logged in Successfully', 2000);
    navigation.navigate('Home');
  };

  useEffect(() => {
    if (phone?.trim() && password?.trim()) {
      setBtnEnable(true);
    } else {
      setBtnEnable(false);
    }
  }, [phone, password]);

  const onCreateButtonPress = () => {
    console.log('create');
    navigation.navigate('Register');
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);

    // }, 1000);
  };

  return (
    <MainFrameView
      containerStyle={
        [
          // {backgroundColor: Colors.background_grey},
        ]
      }>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={CommonStyles.contentContainerStyle}>
        <View
          style={[
            CommonStyles.contentContainerStyle,
            // CommonStyles.shadow, CommonStyles.shadowBox,
          ]}>
          <View style={{flex: 0.1}} />
          <Image source={Images.Logo} style={{width: 200, height: 200}}></Image>
          <View style={{flex: 0.2}} />
          <InputBox
            value={phone}
            onChangeText={val => onTextValueChange('phone', val)}
            placeholder={Strings.mobile_number}
            keyboardType={'number-pad'}
            maxLength={10}
          />
          <InputBox
            value={password}
            onChangeText={val => onTextValueChange('password', val)}
            placeholder={Strings.mpin}
            maxLength={4}
            secureTextEntry={true}
            showRightIcon={true}
            iconStyle={{
              right: deviceWidth / 3 - moderateScale(deviceWidth / 3.3),
            }}
          />
          {/* <View style={{flex: 0.5}} /> */}
          <CustomButton
            onButtonPress={() => onLoginButtonPress()}
            buttonContainerStyle={{
              width: deviceWidth / 1.5,
              marginTop: moderateScale(64),
            }}
            buttonText={Strings.login}
            isDisabled={!isBtnEnable}
            opacity={isBtnEnable ? 1 : 0.6}
          />
          <Text
            style={[
              styles.underlineText,
              CommonStyles.miniText,
              {marginVertical: moderateScale(6), color: Colors.mid_grey},
            ]}>
            {Strings.forgot_password}
          </Text>
          {/* <View style={{flex: 0.11}} />

          <CustomButton
            onButtonPress={() => onCreateButtonPress()}
            buttonText={Strings.create}
          /> */}
          <View
            style={{
              flex: 0.5,
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            <Text style={CommonStyles.miniText}>{Strings.no_account_msg}</Text>
            <TouchableOpacity onPress={() => onCreateButtonPress()}>
              <Text style={styles.underlineText}>{Strings.create}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
      {loading && <AppLoader isLoading={loading} />}
    </MainFrameView>
  );
};

export default Login;

const styles = StyleSheet.create({
  textHeader: {
    textAlign: 'center',
    fontSize: moderateScale(20),
    color: Colors.primary,
    fontWeight: 'bold',
    letterSpacing: 3,
  },
  inputContainer: {
    // flex: 1,
    // alignItems: 'center',
  },
  underlineText: {
    fontSize: moderateScale(14),
    color: Colors.primary,
    textDecorationColor: Colors.primary,
    textDecorationLine: 'underline',
    paddingHorizontal: moderateScale(4),
  },
});
