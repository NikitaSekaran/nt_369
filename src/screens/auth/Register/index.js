import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
  ToastAndroid,
  Switch,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainFrameView from '../../../common/components/MainFrameView';
import {Colors, CommonStyles, Strings} from '../../../common/res';
import {
  deviceWidth,
  moderateScale,
  scale,
} from '../../../common/utils/ScreenRatio';
import InputBox from '../../../common/components/InputBox';
import CustomButton from '../../../common/components/CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppHeader from '../../../common/components/AppHeader';
import {useNavigation} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {isValidEmail, isValidPassword, showToast} from '../../../common/utils/utils';

const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isSubmitBtnEnable, setSubmitBtnEnable] = useState(false);

  const [registerData, setRegisterData] = useState({
    userName: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    dob: '',
    date: new Date(),
    email: '',
    phoneNo: '',
    gender: 'Male',
    isDisabilityPerson: false,
  });

  const [radioButtonsData, setRadioButtonsData] = useState([
    {label: 'Male', value: 1, isSelected: true},
    {label: 'Female', value: 2, isSelected: false},
    {label: 'Others', value: 3, isSelected: false},
  ]);
  const [personDisablityData, setPersonDisablityData] = useState([
    {label: 'Yes', value: 1, isSelected: false},
    {label: 'No', value: 2, isSelected: true},
  ]);
  const navigation = useNavigation();

  useEffect(() => {
    // isValidPassword(registerData?.password)
    console.log(
      '@@@@@@-- ',
      registerData?.userName?.trim() ,
        registerData?.password?.trim() ,
        registerData?.confirmPassword?.trim() ,
        registerData?.firstName?.trim() ,
        registerData?.lastName?.trim(),
        registerData?.dob ,
        registerData?.email?.trim() ,
        registerData?.phoneNo?.trim() ,
        registerData?.gender ,
        registerData?.isDisabilityPerson,
    );
    if (
      registerData?.userName?.trim()?.length > 0 &&
      registerData?.password?.trim()?.length > 0 &&
      registerData?.confirmPassword?.trim()?.length > 0 &&
      registerData?.firstName?.trim()?.length > 0 &&
      registerData?.lastName?.trim()?.length > 0 &&
      registerData?.dob?.length > 0 &&
      registerData?.email?.trim()?.length > 0 &&
      registerData?.phoneNo?.trim()?.length > 0
    ) {
      setSubmitBtnEnable(true);
    } else {
      setSubmitBtnEnable(false);
    }
  }, [registerData]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    registerData['date'] = currentDate;
    registerData['dob'] = moment(currentDate).format('YYYY-MM-DD');
    setRegisterData({...registerData});
    setShowDatePicker(false);
  };

  const onTextValueChange = (key, value) => {
    registerData[key] = value;
    setRegisterData({...registerData, registerData});
  };

  console.log('resg', registerData);

  const onCreateButtonPress = () => {
    console.log('create');
  };

  const onRadioBtnPress = (item, index, isGenderData = false) => {
    if (isGenderData) {
      registerData['gender'] = item?.label;
    } else {
      registerData['isDisabilityPerson'] =
        item?.label?.toLowerCase() == 'yes' ? true : false;
    }
    setRegisterData(registerData);
    console.log('item --- index', item, index);
    const newArray = isGenderData
      ? [...radioButtonsData]
      : [...personDisablityData]; // Create a new array copy
    const updatedData = newArray.map((data, dataIndex) => {
      console.log('data-----', data, dataIndex);
      if (index == dataIndex) {
        data.isSelected = true;
      } else {
        data.isSelected = false;
      }
      return data;
    });
    isGenderData
      ? setRadioButtonsData(updatedData)
      : setPersonDisablityData(updatedData);
  };

  const onSubmitPress = () => {
    console.log('submit pressed');
    console.log("registerData?.password != registerData?.confirmPassword-- ", registerData?.password , registerData?.confirmPassword)
    if (!isValidPassword(registerData?.password)) {
      showToast(Strings.password_error_msg);
      return;
    }
    if (registerData?.password != registerData?.confirmPassword) {
      showToast(Strings.confirm_pwd_mismatch_error);
      return;
    }
  
    if (!isValidEmail(registerData?.email)) {
      showToast(Strings.email_error);
      return;
    }
    if (registerData?.phoneNo?.length != 10) {
      showToast(Strings.phone_no_error);
      return;
    }
        navigation.navigate('Home');

  };

  const showDatepicker = () => setShowDatePicker(true);

  return (
    <MainFrameView>
      <AppHeader
        showBackButton={true}
        onBackPress={() => navigation.goBack()}
        headerText={Strings.register}
      />
      <KeyboardAwareScrollView keyboardShouldPersistTaps={'handled'}>
        <View style={[CommonStyles.shadowBox, CommonStyles.shadow]}>
          <InputBox
            value={registerData?.userName}
            onChangeText={val => onTextValueChange('userName', val)}
            placeholder={Strings.user_name}
          />
          <View
            style={[
              CommonStyles.rowContainer,
              {
                // marginHorizontal: moderateScale(6),
                justifyContent: 'space-between',
              },
            ]}>
            <InputBox
              value={registerData?.password}
              width={deviceWidth / 2.6}
              iconStyle={{
                right: deviceWidth / 3 - moderateScale(deviceWidth / 3.2),
              }}
              onChangeText={val => onTextValueChange('password', val)}
              placeholder={Strings.password}
              secureTextEntry={true}
              showRightIcon={true}
            />
            <InputBox
              value={registerData?.confirmPassword}
              width={deviceWidth / 2.6}
              iconStyle={{
                right: deviceWidth / 3 - moderateScale(deviceWidth / 3.2),
              }}
              onChangeText={val => onTextValueChange('confirmPassword', val)}
              placeholder={Strings.confirm_password}
              secureTextEntry={true}
              showRightIcon={true}
            />
          </View>
          <InputBox
            value={registerData?.firstName}
            onChangeText={val => onTextValueChange('firstName', val)}
            placeholder={Strings.first_name}
          />
          <InputBox
            value={registerData?.lastName}
            onChangeText={val => onTextValueChange('lastName', val)}
            placeholder={Strings.last_name}
          />
          <View style={{width: deviceWidth - moderateScale(64)}}>
            <Text style={styles.labelText}>{Strings.gender}</Text>
            <View
              style={[
                CommonStyles.rowContainer,
                {marginVertical: moderateScale(14), alignSelf: 'flex-start'},
              ]}>
              {radioButtonsData?.map((item, index) => (
                <TouchableOpacity
                  onPress={() => onRadioBtnPress(item, index, true)}
                  style={[
                    CommonStyles.rowContainer,
                    {marginHorizontal: moderateScale(index == 0 ? 0 : 8)},
                  ]}>
                  <Icon
                    name={item?.isSelected ? 'dot-circle-o' : 'circle-o'}
                    size={moderateScale(22)}
                    color={item?.isSelected ? Colors.primary : '#CCCCCC'}
                  />
                  <Text style={styles.radioBtnText}>{item?.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <Text style={styles.labelText}>{Strings.disability_person}</Text>

            <View
              style={[
                CommonStyles.rowContainer,
                {marginVertical: moderateScale(14), alignSelf: 'flex-start'},
              ]}>
              {personDisablityData?.map((item, index) => (
                <TouchableOpacity
                  onPress={() => onRadioBtnPress(item, index)}
                  style={[
                    CommonStyles.rowContainer,
                    {marginHorizontal: moderateScale(index == 0 ? 0 : 8)},
                  ]}>
                  <Icon
                    name={item?.isSelected ? 'dot-circle-o' : 'circle-o'}
                    size={moderateScale(22)}
                    color={item?.isSelected ? Colors.primary : '#CCCCCC'}
                  />
                  <Text style={styles.radioBtnText}>{item?.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <InputBox
            value={registerData?.dob}
            iconStyle={{
              right: deviceWidth / 2.4 - moderateScale(deviceWidth / 2.6),
            }}
            onChangeText={val => onTextValueChange('dob', val)}
            placeholder={Strings.dob}
            showRightIcon={true}
            iconName={'calendar'}
            editable={false}
            onIconPress={() => showDatepicker()}
          />
          <View
            style={[
              CommonStyles.rowContainer,
              {
                marginHorizontal: moderateScale(6),
                justifyContent: 'space-between',
              },
            ]}>
            <InputBox
              value={registerData?.email}
              style={{
                marginRight: moderateScale(12),
              }}
              width={deviceWidth / 2.6}
              onChangeText={val => onTextValueChange('email', val)}
              placeholder={Strings.email}
            />
            <InputBox
              value={registerData?.phoneNo}
              width={deviceWidth / 2.6}
              onChangeText={val => onTextValueChange('phoneNo', val)}
              placeholder={Strings.phone_no}
              keyboardType={'phone-pad'}
              maxLength={10}
            />
          </View>

          <CustomButton
            onButtonPress={() => onSubmitPress()}
            isDisabled={!isSubmitBtnEnable}
            opacity={isSubmitBtnEnable ? 1 : 0.6}
            buttonContainerStyle={{
              width: deviceWidth / 1.5,
              marginVertical: scale(50),
            }}
            buttonText={Strings.submit}
          />
        </View>
      </KeyboardAwareScrollView>
      {showDatePicker && (
        <DateTimePicker
          value={new Date(registerData?.date)}
          mode="date"
          display="default"
          onChange={onChange}
          maximumDate={new Date()}
        />
      )}
    </MainFrameView>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    textAlign: 'center',
    fontSize: moderateScale(20),
    color: Colors.primary,
    fontWeight: 'bold',
    letterSpacing: 3,
  },
  inputContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: moderateScale(16),
    // backgroundColor: 'pink'
  },
  labelText: {
    color: Colors.black,
    fontSize: moderateScale(13),
    marginTop: moderateScale(20),
    fontWeight: '600',
    // fontWeight: 'bold',
  },
  radioBtnText: {
    fontSize: moderateScale(13),
    textAlign: 'center',
    paddingHorizontal: moderateScale(6),
    // backgroundColor: 'skyblue'
  },
});
export default Register;
