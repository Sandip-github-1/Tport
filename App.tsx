import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import type {PropsWithChildren} from 'react'


//Navigation 
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator} from "@react-navigation/native-stack"

// Screens
import Home from './components/Home'
import ForgotPassword from './components/ForgotPassword'
import Login from './components/Login'

// Type checking
export type RootStackParamList = {
  Home: { userId: string};
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
              // title: "Test"
              headerShown: false
            }}
            />
            <Stack.Screen 
            name='ForgotPassword'
            component={ForgotPassword}
            options={{
              // title: "Test"
              headerShown: false
            }}
            />            
          </Stack.Navigator>          
        </NavigationContainer>
  );
}

export default App