import { NavigationContainer } from "@react-navigation/native";
import BottomTabBar from "../../BottomTabBar";
import DrawerMenu from "../../DrawerMenu";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screens from "../../Screens";

const HomeStack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}} initialRouteName={'HomeTab'} >
      <BottomTabBar/>
      <DrawerMenu/>
      <HomeStack.Screen name="HomeTab" component={Screens.Home}/>

      </HomeStack.Navigator>
  );
}

export default HomeStackNavigator;
