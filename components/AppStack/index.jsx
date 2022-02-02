import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import SearchPage from '../../pages/search'
import Home from '../../pages/home';


const Stack = createStackNavigator();

function AppStack() {
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer>
      <Stack.Navigator ref={navigationRef}>
        <Stack.Screen
          name='Home'
          options={{ title: 'Find Movies, TV shows and more...' }}
          component={Home}
        />
        <Stack.Screen name='search' component={SearchPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
