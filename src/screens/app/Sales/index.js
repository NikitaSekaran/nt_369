import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import MainFrameView from '../../../common/components/MainFrameView';
import AppHeader from '../../../common/components/AppHeader';
import {Colors, CommonStyles, Strings} from '../../../common/res';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  deviceHeight,
  deviceWidth,
  moderateScale,
  scale,
} from '../../../common/utils/ScreenRatio';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

const Sales = () => {
  const data = [
    {
      id: 1,
      icon: 'email',
      value: 'sam@yopmail.com',
    },
    {
      id: 2,
      icon: 'whatsapp',
      value: '1234567890',
    },
    {
      id: 3,
      icon: 'location',
      value: 'Chennai',
    },
    {
      id: 4,
      icon: 'shopping-bag',
      value: '1y 5m',
    },
  ];
  const navigation = useNavigation();

  const renderList = ({item, index}) => {
    return (
      <View
        key={item.id}
        style={[
          CommonStyles.rowContainer,
          {flex: 1, justifyContent: 'flex-start'},
        ]}>
        {item?.icon == 'email' ? (
          <FontistoIcon
            name={item.icon}
            size={20}
            color={Colors.primary}
            style={{marginRight: moderateScale(20)}}
          />
        ) : index % 2 == 0 ? (
          <IoniconsIcon
            name={item.icon}
            size={20}
            color={Colors.primary}
            style={{marginRight: moderateScale(16)}}
          />
        ) : (
          <Icon
            name={item.icon}
            size={20}
            color={Colors.primary}
            style={{marginRight: moderateScale(16)}}
          />
        )}
        <Text style={CommonStyles.smallText}>{item.value}</Text>
      </View>
    );
  };
  return (
    <MainFrameView
      containerStyle={{flex: 1, backgroundColor: Colors.background_grey}}>
      <AppHeader
        headerText={Strings.sales}
        showMenuIcon={true}
        onMenuPress={() => navigation.openDrawer()}
      />

      <View
        style={[
          CommonStyles.shadow,
          CommonStyles.shadowBox,
          CommonStyles.centerContent,
          {
            flex: 1,
            // width: deviceWidth - moderateScale(24),
            // height: deviceHeight / 1.25,
            // paddingVertical: moderateScale(64)
          },
        ]}>
        <View style={{flex: 1}} />

        <TouchableOpacity
          style={[
            CommonStyles.avatar,
            {alignItems: 'center', justifyContent: 'center'},
          ]}>
          <Icon name={'user'} size={60} />
        </TouchableOpacity>
        <Text style={[CommonStyles.mediumText, {marginVertical: scale(20)}]}>
          Sam Chandar
        </Text>

        <FlatList
          data={data}
          renderItem={renderList}
          keyExtractor={item => item.id}
        />
        <View style={{flex: 1}} />
      </View>
    </MainFrameView>
  );
};

export default Sales;
