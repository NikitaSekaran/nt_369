import React, {useState} from 'react';
import MainFrameView from '../../../common/components/MainFrameView';
import AppHeader from '../../../common/components/AppHeader';
import {Images, Strings} from '../../../common/res';
import {useNavigation} from '@react-navigation/native';
import {ImageBackground, View, Text, Image, TextInput} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ms} from '../../../common/res/Scale';
import {Colors} from '../../../common/res';
const reportData = [
  {
    name: 'Arun',
    mobile_number: '123-456-7890',
    damages_count: 2,
  },
  {
    name: 'Ramesh',
    mobile_number: '987-654-3210',
    damages_count: 0,
  },
  {
    name: 'Prabhu',
    mobile_number: '555-555-5555',
    damages_count: 5,
  },
  {
    name: 'Kumar',
    mobile_number: '111-222-3333',
    damages_count: 1,
  },
  {
    name: 'Selva',
    mobile_number: '888-777-6666',
    damages_count: 3,
  },
  {
    name: 'Rajesh',
    mobile_number: '333-444-5555',
    damages_count: 7,
  },
  {
    name: 'Ravi',
    mobile_number: '555-123-4567',
    damages_count: 4,
  },
  {
    name: 'Aswin',
    mobile_number: '999-888-7777',
    damages_count: 0,
  },
  {
    name: 'Jefin',
    mobile_number: '777-888-9999',
    damages_count: 2,
  },
  {
    name: 'Gokul',
    mobile_number: '444-555-6666',
    damages_count: 6,
  },
];

function renderReport({item, index}) {
  return (
    <View
      style={{
        width: '100%',
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1.5,
        borderBottomColor: '#fff',
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={Images.Profile}
          tintColor={'#707070'}
          style={{height: ms(35), width: ms(35), alignSelf: 'center'}}
        />
        <View style={{marginHorizontal: 15}}>
          <Text style={{fontSize: 18, color: '#000'}}>{item.name}</Text>
          <Text style={{fontSize: 14, color: '#000'}}>
            {item.mobile_number}
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: 'flex-end',
        }}>
        {/* {index === 0 && (
          <Text
            style={{
              alignSelf: 'center',
            }}>
            Damages Count
          </Text>
        )} */}
        <Text style={{fontSize: 18, color: '#000'}}>{item.damages_count}</Text>
      </View>
    </View>
  );
}

const Customer = () => {
  const navigation = useNavigation();
  const [isSearchBarFocused, setIsSearchBarFocused] = useState(false);
  return (
    <MainFrameView>
      {/* <ImageBackground
        source={Images.Linear}
        style={{width: '100%', height: '100%'}}> */}
      <AppHeader
        headerText={'Empty Can Report'}
        showMenuIcon={true}
        onMenuPress={() => navigation.openDrawer()}
      />
      <View
        style={[
          {
            backgroundColor: '#fff',
            height: 40,
            marginHorizontal: 20,
            marginBottom: 20,
            borderRadius: 26,
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
          },
          isSearchBarFocused
            ? {borderColor: Colors.primary, borderWidth: 2}
            : '',
        ]}>
        <Ionicons
          name="search"
          size={20}
          color={isSearchBarFocused ? Colors.primary : '#ccc'}
          style={{paddingLeft: 15}}
        />
        <TextInput
          placeholder="Search by Name"
          onBlur={() => {
            setIsSearchBarFocused(false);
          }}
          onFocus={() => {
            setIsSearchBarFocused(true);
          }}
          style={{
            // borderRightColor:Colors.sideDrawerIconClr,

            flex: 1,
            padding: 0,
            paddingLeft: 10,
          }}></TextInput>
        <FontAwesome
          name="filter"
          size={18}
          color={Colors.sideDrawerIconClr}
          style={{paddingRight: 15, paddingLeft: 10}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomColor: '#0ff',
          borderBottomWidth: 1,
          padding: 10,
        }}>
        <Text
          style={{
            alignSelf: 'flex-end',
            marginHorizontal: 10,
            color: '#000',
            fontSize: 17,
          }}>
          Profile Details
        </Text>
        <Text
          style={{
            alignSelf: 'flex-end',
            marginHorizontal: 10,
            color: '#000',

            fontSize: 17,
          }}>
          Damages Count
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={reportData}
        renderItem={renderReport}></FlatList>
      {/* </ImageBackground> */}
    </MainFrameView>
  );
};

export default Customer;
