import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { ProductScreen } from '../screens/products/ProductScreen';
import { useNavigation } from '@react-navigation/core';
import { useEffect } from 'react';




export type RootStackParams = {
  Home: undefined,
  Product: { id: number, name: string },
  Products: undefined,
  Settings: undefined,
}

const Stack = createStackNavigator<RootStackParams>();



export const StackNavigator = () => {

  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      headerShown: false,
    })
  
    
  }, [])
  


  return (
    <Stack.Navigator screenOptions={ {
      headerShown: true,
      headerStyle: {
        elevation: 0,
        shadowColor: 'transparent'
      }
    } }>
      <Stack.Screen name="Home" component={ HomeScreen } />
      
      <Stack.Screen name="Product" component={ ProductScreen } />
      <Stack.Screen name="Products" component={ ProductsScreen } />

      <Stack.Screen name="Settings" component={ SettingsScreen } />
    </Stack.Navigator>
  );
};