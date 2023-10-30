import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ HomeScreen } />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}