import {View, Text} from 'react-native';
import React from 'react';
import MainFrameView from '../../../common/components/MainFrameView';
import AppHeader from '../../../common/components/AppHeader';
import {Strings} from '../../../common/res';
import {useNavigation} from '@react-navigation/native';

const Expenses = () => {
  const navigation = useNavigation();
  return (
    <MainFrameView>
      <AppHeader
        headerText={Strings.expenses}
        showMenuIcon={true}
        onMenuPress={() => navigation.openDrawer()}
      />
    </MainFrameView>
  );
};

export default Expenses;
