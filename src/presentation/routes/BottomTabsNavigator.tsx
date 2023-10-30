import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { globalColors } from '../theme/theme';
import { TopTabsNavigator } from './TopTabsNavigator';


const Tab = createBottomTabNavigator();



export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        // headerShown: false,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent'
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0
        }
      }}
    >
      <Tab.Screen name="Tab1" options={{ title:'Tab1', tabBarIcon: ({ color }) => (<Text style={{ color }} >Tab1</Text>) }} component={ Tab1Screen } />
      <Tab.Screen name="Tab2" options={{ title:'Tab2', tabBarIcon: ({ color }) => (<Text style={{ color }} >Tab2</Text>) }} component={ TopTabsNavigator } />
      <Tab.Screen name="Tab3" options={{ title:'Tab3', tabBarIcon: ({ color }) => (<Text style={{ color }} >Tab3</Text>) }} component={ Tab3Screen } />
    </Tab.Navigator>
  );
};