import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const Menu = (props) => {
  const navigation = useNavigation();

  const navigateToScreen = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <DrawerContentScrollView {...props}>
      {/* <TouchableOpacity onPress={() => navigateToScreen('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Profile')}>
        <Text>Profile</Text>
      </TouchableOpacity> */}
      {/* Add more items as needed */}
    </DrawerContentScrollView>
  );
};

export default Menu;
