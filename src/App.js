import 'react-native-gesture-handler'

import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Login from './screens/auth/Login';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './navigation';
import Splash from './screens/auth/Splash';

const App = () => {
  const [isSplashLoading, setIsSplashLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashLoading(false);
    }, 1000);
  }, []);

  return isSplashLoading ? (
    <Splash />
  ) : (
    <Routes/>
  );
};

export default App;
