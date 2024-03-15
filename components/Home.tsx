import React, { useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  useColorScheme,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
  Button
} from 'react-native';
import MainManu from './MainManu';

// Navigations
import {NativeStackScreenProps} from "@react-navigation/native-stack"

// Check type safety
import {RootStackParamList} from '../App'

import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native';

type Homeprops = NativeStackScreenProps<RootStackParamList,'Home'>

function Home({route}: Homeprops): React.JSX.Element {
  // function Home({navigation}: Homeprops): React.JSX.Element {
  const [form, setForm]=useState({
    email: '',
    password: '',
  });
  const {userId} = route.params
  const navigation =  useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <SafeAreaView style={{ flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headercontainer}>
          <View style={styles.header}>
            <Image 
              source={require("../assets/logo.jpg")}
              style={styles.headerImg}
              alt= "Logo"
            />
          </View>
          </View>
          <ImageBackground source={require("../assets/bg.jpg")} resizeMode="cover" style={styles.image}>
          <View style={styles.bgcontainer}>          
          <Text style={styles.title}>WELCOME TO T-PORT {userId} </Text>
          <Button
          title='Log Out'
          onPress={() => {           
            if(userId != '' && userId != undefined) {           
              navigation.navigate("Login", {loginId: "3"});
            }else{
              Alert.alert('Please Enter User Id and Password !');
            }
            }}            
            />
            <View style={styles.formcontainer}>
                  <MainManu />
            </View>
          </View>    
          </ImageBackground>
        </View>
    </ScrollView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create(
  {
    image: {  },
    btn: {      
      borderRadius: 8,
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical:5,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    bgcolorblue: {
        backgroundColor: '#0053a3',
    },
    btnText : {
      fontSize: 18,
      fontWeight: '600',
      color: '#fff'
    },
    container: {
      flex: 1,
    },
    headercontainer:{},
    bgcontainer: {},
    formcontainer:{
      // borderRadius:25,
      // marginHorizontal:18,
      flex:1,
      alignContent: 'center',
      marginVertical:10
    },
    header: {      
      marginVertical: 10,
    },
    headerImg: {
      width: 170,
      height: 120,
      alignSelf: 'center',
      marginTop: 40
    },
    title: {
      fontSize: 27,
      fontWeight: '700',
      color: '#d90429',
      marginVertical:30,
      textAlign: 'center',
      letterSpacing:1
    }
  });

export default Home;
