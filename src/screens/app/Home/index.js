import {View, Text, FlatList, ScrollView, ImageBackground} from 'react-native';
import React from 'react';
import MainFrameView from '../../../common/components/MainFrameView';
import AppHeader from '../../../common/components/AppHeader';
import {Images, Strings} from '../../../common/res';
import {useNavigation} from '@react-navigation/native';
import PieChart from 'react-native-pie-chart';
import styles from './style';
import CustomPieChart from '../../../common/components/Chart/CustomPieChart';
const Dashboard = () => {
  const rs = '\u20B9';
  const navigation = useNavigation();
  const widthAndHeight = 230;
  const series = [123, 321, 223];
  const sliceColor = ['#85E0A3', '#FFD966', '#80CAFF'];
  const list1 = [
    {id: 1, label: 'Empty 20Ltr Can', value: 93},
    {id: 2, label: 'Filled 20Ltr Can', value: 72},
    {id: 3, label: 'Total Purchase', value: 2400},
    {id: 4, label: 'Total Sales', value: 4875},
    // {id: 5, label: 'Total Expenses', value: 500},
    // {id: 6, label: 'Today Cash', value: 500},
  ];
  const list2 = [
    {id: 6, label: 'Vendor Balance', value: 300},
    {id: 6, label: 'Customer Balance', value: 750},
    {id: 6, label: 'Customer Advance', value: 150},
    {id: 6, label: 'Customer Deposit', value: 5400},
  ];
  const renderItem = ({item}) => {
    return (
      <View style={[styles.mainBox]}>
        <View style={styles.listBox}>
          <Text style={styles.labelText}>
            {item?.id !== 1 && item.id !== 2 ? rs : null}
            {item?.value}
          </Text>
          <Text style={styles.valueText}>{item?.label}</Text>
        </View>
      </View>
    );
  };
  function renderTotalExpense(label, val) {
    return (
      <View style={styles.fullBox}>
        <View style={styles.listBox1}>
          {/* <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0}
            coverFill={'#FFF'}
          /> */}
          <View style={{flexDirection:'row',width:'100%'}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              color: '#707070',
              margin: 5,
              width:'75%'
            }}>
            {label}
          </Text>
          <Text style={[styles.labelText, {fontSize: 18,paddingTop:7,width:'15%'}]}>
            {rs}
            {val}
          </Text>
          </View>
          
          <View style={{flexDirection:'row',width:'100%'}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              color: '#707070',
              margin: 5,
              width:'75%'
            }}>
            {"Today Cash"}
          </Text>
          <Text style={[styles.labelText, {fontSize: 18,paddingTop:7,width:'15%'}]}>
            {rs}
            {"2500"}
          </Text>
          </View>
        </View>
      </View>
    );
  }
  return (
    <MainFrameView>
      {/* <ImageBackground
        source={Images.Linear}
        style={{width: '100%', height: '100%'}}> */}
      <AppHeader
        headerText={Strings.dashboard}
        showMenuIcon={true}
        onMenuPress={() => navigation.openDrawer()}
      />

      <ScrollView
        // style={styles.mainContainer}
        showsVerticalScrollIndicator={false}
        style={{paddingBottom: 150, marginTop: 15}}>
        <FlatList
          nestedScrollEnabled={false}
          data={list1}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
        {renderTotalExpense('Total Expenses', '600')}
        <View style={styles.chartBox}>
          <View style={{justifyContent: 'center'}}>
            {/* <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0}
            coverFill={'#FFF'}
          /> */}
            <Text
              style={{
                fontSize: 22,
                fontWeight: '600',
                color: '#707070',
                textAlign: 'center',
                marginTop: 10,
              }}>
              {'Today Profit'}
            </Text>
          </View>
          <CustomPieChart />
          {/* <PieChart
              widthAndHeight={widthAndHeight}
              series={series}
              sliceColor={sliceColor}
              coverFill={'#FFF'}
            /> */}

          {/* <Text style={[styles.labelText, {fontSize: 20, paddingVertical: 10}]}>
            {rs}
            {'234'}
          </Text> */}
        </View>
        <FlatList
          nestedScrollEnabled={false}
          data={list2}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
        {/* {renderTotalExpense('Today Cash', '2500')} */}
       
      </ScrollView>
      {/* </ImageBackground> */}
    </MainFrameView>
  );
};

export default Dashboard;
