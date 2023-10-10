import {StyleSheet} from 'react-native';
import { CommonStyles } from '../../../common/res';
import {s, vs} from '../../../common/res/Scale';
import { moderateScale } from '../../../common/utils/ScreenRatio';

export default StyleSheet.create({
 listView:{
     backgroundColor:'#fff',width:'100%',
     padding:15 ,
     flexDirection:'row',
     justifyContent:'space-between',
     borderRadius:15,
     ...CommonStyles.shadow
 }

});
