import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

import Background from './components/Background'

//Navigation 
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator} from "@react-navigation/native-stack"

// Screens
import Home from './components/Home'
import ForgotPassword from './components/ForgotPassword'
import Login from './components/Login'

export type RootStackParamList = {
  Home: { userId: string};
  ForgotPassword: { passId: string};
  Login: { userId: string}
};

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (
    
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff"}}>
      <ScrollView>
          <View>            
            <NavigationContainer>
              <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen 
                name='Home'
                component={Home}
                options={{
                  title: "Home"
                }}
                />
                <Stack.Screen 
                name='ForgotPassword'
                component={ForgotPassword}
                options={{
                  title: "Forgot Password"
                }}
                />
                <Stack.Screen 
                name='Login'
                component={Login}
                options={{
                  title: "Login Page"
                }}
                />                

              </Stack.Navigator>
            </NavigationContainer>
            {/* <Login /> */}
            <Home />
            {/* <ForgotPassword /> */}
          </View>
      </ScrollView>
    </SafeAreaView>    
  )
}

export default App