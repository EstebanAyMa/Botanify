import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import LoginScreen from '/Users/estebanayala/Documents/Aplicaciones moviles/Botanify/botanify/views/LoginScreen';
import RegistrationScreen from '/Users/estebanayala/Documents/Aplicaciones moviles/Botanify/botanify/views/RegistrationScreen';
import HomeScreen from '/Users/estebanayala/Documents/Aplicaciones moviles/Botanify/botanify/views/HomeScreen';
import DetailsSceeen from '/Users/estebanayala/Documents/Aplicaciones moviles/Botanify/botanify/views/DetailsScreen';
import OpenCamera from '/Users/estebanayala/Documents/Aplicaciones moviles/Botanify/botanify/views/OpenCamera';
import {StatusBar} from 'react-native';
import COLORS from '/Users/estebanayala/Documents/Aplicaciones moviles/Botanify/botanify/const/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '/Users/estebanayala/Documents/Aplicaciones moviles/Botanify/botanify/views/components/Loader';

const App = () => {
  const [initialRouteName, setInitialRouteName] = React.useState('');

  React.useEffect(() => {
    setTimeout(() => {
      authUser();
    }, 2000);
  }, []);

  const authUser = async () => {
    try {
      let userData = await AsyncStorage.getItem('userData');
      if (userData) {
        userData = JSON.parse(userData);
        if (userData.loggedIn) {
          setInitialRouteName('HomeScreen');
        } else {
          setInitialRouteName('LoginScreen');
        }
      } else {
        setInitialRouteName('RegistrationScreen');
      }
    } catch (error) {
      setInitialRouteName('RegistrationScreen');
    }
  };
  return (
    <NavigationContainer>
      {!initialRouteName ? (
        <Loader visible={true} />
      ) : (
        <>
          <Stack.Navigator
            initialRouteName={initialRouteName}
            screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="RegistrationScreen"
              component={RegistrationScreen}
            />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />            
            <Stack.Screen name="Details" component={DetailsSceeen} />
            <Stack.Screen name="OpenCamera" component={OpenCamera} />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
};

export default App;