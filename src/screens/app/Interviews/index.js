import {View, Text} from 'react-native';
import React from 'react';
import MainFrameView from '../../../common/components/MainFrameView';
import AppHeader from '../../../common/components/AppHeader';
import {Strings} from '../../../common/res';
import {useNavigation} from '@react-navigation/native';

const Interviews = () => {
  const navigation = useNavigation();
  return (
    <MainFrameView>
      <AppHeader
        headerText={Strings.interviews}
        showMenuIcon={true}
        onMenuPress={() => navigation.openDrawer()}
      />
    </MainFrameView>
  );
};

export default Interviews;
