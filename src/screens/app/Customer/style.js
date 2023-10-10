import {StyleSheet} from 'react-native';
import { CommonStyles } from '../../../common/res';
import {s, vs} from '../../../common/res/Scale';
import { moderateScale } from '../../../common/utils/ScreenRatio';

export default StyleSheet.create({
  container: {},
  mainBox: {width: '50%', alignItems: 'center', marginBottom: 10},
  listBox:{
    backgroundColor:'#fff',
    margin:10,
    ...CommonStyles.shadow,
  }   

});
