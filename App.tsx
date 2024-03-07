import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Login from './components/Login'
import Background from './components/Background'

//Navigation 
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from './components/Home'
import ForgotPassword from './components/ForgotPassword'


//screens
export type RootStackParamList = {
  Home: undefined;
  Login: { productId: string}
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
                  title: "Trending Products"
                }}
                />
                <Stack.Screen 
                name='Login'
                component={Login}
                options={{
                  title: "Products"
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