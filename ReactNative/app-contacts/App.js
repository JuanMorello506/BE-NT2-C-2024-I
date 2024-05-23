
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen'
import RegisterLoginScreen from './Screens/RegisterLoginScreen';


const Stack = createStackNavigator()



export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='RegisterLogin'>
        <Stack.Screen name='PantallaHome' component={HomeScreen}/>
        <Stack.Screen name='RegisterLogin' component={RegisterLoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}