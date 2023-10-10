import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screens from './Screens';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

function BottomTabBar() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = <Ionicons name={'home'} size={18} color={color} />;
          } else if (route.name === 'Customer') {
            iconName = <Icon name={'users'} size={18} color={color} />;
          } else if (route.name === 'Sales') {
            iconName = <AntDesign name="creditcard" size={18} color={color} />;
          } else if (route.name === 'Expenses') {
            iconName = (
              <FontAwesome5 name="money-bill-wave" size={18} color={color} />
            );
          } else {
            // if (route.name === 'Alerts')
            iconName = <Octicons name="report" size={18} color={color} />;
          }
          return iconName;
        },
      })}>
      <Tab.Screen
        options={{headerShown: false}}
        name="Home"
        component={Screens.Home}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Customer"
        component={Screens.Customer}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Sales"
        component={Screens.Sales}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Expenses"
        component={Screens.Expenses}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Reports"
        component={Screens.ProfitReports}
      />
      {/* Add your tab screens here */}
    </Tab.Navigator>
  );
}

export default BottomTabBar;
