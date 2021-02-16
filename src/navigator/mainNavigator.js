import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps205783Navigator from '../features/Maps205783/navigator';
import Additem205782Navigator from '../features/Additem205782/navigator';
import Maps205778Navigator from '../features/Maps205778/navigator';
import UserProfile205774Navigator from '../features/UserProfile205774/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps205783: { screen: Maps205783Navigator },
Additem205782: { screen: Additem205782Navigator },
Maps205778: { screen: Maps205778Navigator },
UserProfile205774: { screen: UserProfile205774Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
