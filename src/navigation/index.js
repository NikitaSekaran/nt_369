import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerMenu from "./DrawerMenu";

const { NavigationContainer } = require("@react-navigation/native");
const { default: Screens } = require("./Screens");

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
        <Stack.Screen name="Login" component={Screens.Login} />
        <Stack.Screen name="Register" component={Screens.Register} />
        <Stack.Screen name="Home" component={DrawerMenu}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
