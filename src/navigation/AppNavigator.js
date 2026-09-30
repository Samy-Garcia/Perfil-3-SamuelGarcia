import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentScreen from '../screens/StudentScreen';
import ApiScreen from '../screens/ApiScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Estudiante"
        screenOptions={{
          headerStyle: { backgroundColor: '#1e293b' },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen name="Estudiante" component={StudentScreen} />
        <Stack.Screen name="Api" component={ApiScreen} options={{ title: 'Rick and Morty' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
