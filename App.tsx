
import React from 'react'
import type {PropsWithChildren} from 'react'


//Navigation 
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator} from "@react-navigation/native-stack"

// Screens
import Home from './components/Home'
import ForgotPassword from './components/ForgotPassword'
import Login from './components/Login'

// Type checking the navigator
export type RootStackParamList = {
  Home: { userData : any};
  ForgotPassword: { passId: string};
  Login: { loginId: string}
};
const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
            name='Login'
            component={Login}
            options={{
              // title: "",
              headerShown: false
            }}
            />

            <Stack.Screen 
            name='Home'
            component={Home}
            options={{
              // title: ""
              headerShown: false
            }}
            />

            <Stack.Screen 
            name='ForgotPassword'
            component={ForgotPassword}
            options={{
              // title: ""
              headerShown: false
            }}
            /> 
          </Stack.Navigator>
        </NavigationContainer>
  );
}

export default App