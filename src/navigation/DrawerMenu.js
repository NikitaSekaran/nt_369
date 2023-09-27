import Menu from "../screens/app/Menu";
import BottomTabBar from "./BottomTabBar";

const { createDrawerNavigator } = require("@react-navigation/drawer");
import { createAppContainer } from 'react-navigation';
const Drawer = createDrawerNavigator();


const DrawerMenu  = () =>{
  return (
    <Drawer.Navigator drawerContent={(props) => <Menu {...props} />}>
      <Drawer.Screen options={{ headerShown: false }} name="Menu" component={BottomTabBar}/>
      {/* Add your drawer screens here */}
    </Drawer.Navigator>
  );
}

// const AppContainer = createAppContainer(DrawerMenu);
// const RootComponent = () => {
//   return(
//     <AppContainer/>
//   )
// }

export default DrawerMenu;
