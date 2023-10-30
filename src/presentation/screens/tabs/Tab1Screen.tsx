import { Text, View } from 'react-native';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';

import Icon from 'react-native-vector-icons/Ionicons';


export const Tab1Screen = () => {

  // const navigation = useNavigation();


  // useEffect( () => {
  //   navigation.setOptions( {
  //     headerLeft: () => (
  //       <Pressable onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer ) }>
  //         <Text>Menú</Text>
  //       </Pressable>
  //     )
  //   } );
  // }, [] );



  return (
    <View>
      <HamburgerMenu />


      <Text>Tab1Screen</Text>

      <Icon name="rocket-outline" size={100} />

    </View>
  );
};