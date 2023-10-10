import {StyleSheet} from 'react-native';
import { CommonStyles } from '../../../common/res';
import {s, vs} from '../../../common/res/Scale';
import { moderateScale } from '../../../common/utils/ScreenRatio';

export default StyleSheet.create({
  container: {},
  mainBox: {width: '50%', alignItems: 'center', marginBottom: 10},
  fullBox: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  listBox1: {
    width: '93%',
    height: vs(65),
    borderWidth: 2,
    borderColor: '#fff',
    // alignItems: 'center',
    borderRadius: vs(10),
    backgroundColor: 'white',
    paddingHorizontal:20,
    // flexDirection: 'row',
    // justifyContent: 'space-around', 
    ...CommonStyles.shadow,
  },
  listBox: {
    width: vs(150),
    height: vs(60),
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    borderRadius: vs(10),
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    ...CommonStyles.shadow,
    marginVertical: moderateScale(5),
  },
  boxContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    // flex: 1,
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    justifyContent: 'space-between',
  },
  valueText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#707070',
    width: '80%',
    textAlign: 'center',
    margin: 5,
  },
  chartBox:{
    backgroundColor:'#fff',
    ...CommonStyles.shadow,
    alignItems:'center',
    marginHorizontal:15,
    borderRadius:15,
    justifyContent:'center',
    marginVertical:10
  }
});
