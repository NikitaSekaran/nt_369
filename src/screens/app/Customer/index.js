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
import style from './style';
const reportData = [
  {
    name: 'Ganesh Store',
    mobile_number: '9962165149',
    damages_count: 2,
  },
  {
    name: 'Daniyal',
    mobile_number: '8124963797',
    damages_count: 0,
  },
  {
    name: 'Arun',
    mobile_number: '8122071506',
    damages_count: 5,
  },
  {
    name: 'Prabhu',
    mobile_number: '8072754189',
    damages_count: 1,
  },
  {
    name: 'Prem',
    mobile_number: '637996790',
    damages_count: 3,
  },
  {
    name: 'Jefin',
    mobile_number: '9943878759',
    damages_count: 7,
  },
  {
    name: 'Thiru',
    mobile_number: '9551755290',
    damages_count: 4,
  },
  {
    name: 'Chandru',
    mobile_number: '9943496829',
    damages_count: 0,
  },
  {
    name: 'Ravi',
    mobile_number: '9843979674',
    damages_count: 2,
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
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={Images.Profile}
          tintColor={'#707070'}
          style={{height: ms(35), width: ms(35), alignSelf: 'center'}}
        />
        <View style={{marginHorizontal: 15}}>
          <Text style={{fontSize: 17, color: '#000'}}>{item.name}</Text>
          <View style={{flexDirection:'row'}}>
          <FontAwesome
          name="phone"
          size={18}
          color={ '#707070'}
          style={{paddingRight:5}}
        />
          <Text style={{fontSize: 14, color: '#707070'}}>
            {item.mobile_number}
          </Text>
          </View>
          
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
      <View style={{flex:1}}>
        <View style={{alignItems:'center',paddingVertical:10}}>
          <Text style={{color:Colors.black,fontSize:16}}>Total Empty Due : 230</Text>
        </View>
      <View
        style={[
          {
            backgroundColor: '#fff',
            height: 45,
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
          paddingVertical: 5,
          paddingHorizontal:10
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
          Empty Count
        </Text>
      </View>
      <View style={style.listBox}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={reportData}
        renderItem={renderReport}></FlatList>
      </View>
      </View>
      {/* </ImageBackground> */}
    </MainFrameView>
  );
};

export default Customer;
