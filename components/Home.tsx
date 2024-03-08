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
  ActivityIndicator
} from 'react-native';
import MainManu from './MainManu';

// Navigations
import {NativeStackScreenProps} from "@react-navigation/native-stack"

// Check type safety
import {RootStackParamList} from '../App'

type Homeprops = NativeStackScreenProps<RootStackParamList,'Home'>

function Home( navigation: any ): React.JSX.Element {
  const [form, setForm]=useState({
    email: '',
    password: '',
  });

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
          <Text style={styles.title}>WELCOME TO T-PORT</Text>
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
