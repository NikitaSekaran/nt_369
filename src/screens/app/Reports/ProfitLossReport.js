import React from 'react';
import MainFrameView from '../../../common/components/MainFrameView';
import AppHeader from '../../../common/components/AppHeader';
import {Colors, Images, Strings} from '../../../common/res';
import {useNavigation} from '@react-navigation/native';
import {ImageBackground, View, Text, Image, FlatList} from 'react-native';
import {ms} from '../../../common/res/Scale';
import PieChart from 'react-native-pie-chart';
import CustomPieChart from '../../../common/components/Chart/CustomPieChart';
const ProfitReports = () => {
  const navigation = useNavigation();
  const widthAndHeight = 230;
  const series = [123, 321, 223];
  const sliceColor = ['#85E0A3', '#FFD966', '#80CAFF'];
  const calendar = [
    {id: 1, name: 'Jan'},
    {id: 2, name: 'Feb'},
    {id: 3, name: 'Mar'},
    {id: 4, name: 'Apr'},
    {id: 5, name: 'May'},
    {id: 6, name: 'Jun'},
    {id: 7, name: 'Jul'},
    {id: 8, name: 'Aug'},
    {id: 9, name: 'Sep'},
    {id: 10, name: 'Oct'},
    {id: 11, name: 'Nov'},
    {id: 12, name: 'Dec'},
  ];
  const renderCaleder = ({item}) => {
    return (
      <View
        style={{
          width: 88,
          height: 88,
          backgroundColor: '#fff',
          marginRight: 10,
          marginVertical: 5,
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 4,
          borderRadius: 5,
        }}>
        <Text style={{fontSize: 16, fontWeight: '600',color:Colors.darkBlue}}>{item?.name}</Text>
        <Text style={{fontSize: 16, fontWeight: '600',color:Colors.darkBlue}}>{2023}</Text>
      </View>
    );
  };
  return (
    <MainFrameView>
      {/* <ImageBackground
        source={Images.Linear}
        style={{width: '100%', height: '100%'}}> */}
      <AppHeader
        headerText={'Profit & Loss Report'}
        showMenuIcon={true}
        onMenuPress={() => navigation.openDrawer()}
      />
      <View style={{marginHorizontal: 15, marginTop: 15}}>
        <View style={{alignItems: 'flex-start'}}>
          <Text style={{fontSize: 18, fontWeight: '500', color: 'black'}}>
            Jan 2023
          </Text>
        </View>

        {/* <View style={{alignItems: 'center', marginVertical: 10}}> */}
        <CustomPieChart />
        {/* <PieChart
              widthAndHeight={widthAndHeight}
              series={series}
              sliceColor={sliceColor}
              coverFill={'#FFF'}
            /> */}
        {/* </View> */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View />
          <Image
            source={Images.dropDown}
            resizeMode="contain"
            style={{height: 50, width: 120}}
          />
        </View>
        <View style={{marginVertical: 15}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={calendar}
            numColumns={4}
            renderItem={renderCaleder}></FlatList>
        </View>
      </View>
      {/* </ImageBackground> */}
    </MainFrameView>
  );
};

export default ProfitReports;
