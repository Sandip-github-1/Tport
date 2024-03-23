import React, {useState} from 'react';

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
  Button,
} from 'react-native';
import MainManu from './MainManu';

// Navigations
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// Check type safety
import {RootStackParamList} from '../App';

import ContactUs from './ContactUs';
import Logout from './Logout';
import PreventBack from './PreventBack';
import styles from './Style/GlobalStyle';
import Header from './Header';

type Homeprops = NativeStackScreenProps<RootStackParamList, 'Home'>;

function Home({navigation, route}: Homeprops): React.JSX.Element {
  const handleLogout = () => {
    if (route.params.userData.tokenId != '') {
      route.params.userData.tokenId = '';
      navigation.navigate('Login', route.params.userData);
    } else {
      Alert.alert('Error');
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <Header />
          <ImageBackground
            source={require('../assets/bg.jpg')}
            resizeMode="cover"
            style={styles.image}>
            <View style={styles.bgcontainer}>
              <Text style={styles.title}>
                WELCOME TO T-PORT {route.params.userData.name}
              </Text>
              <View style={styles.formcontainer}>
                <PreventBack />
                <MainManu />
                <Logout onLogout={handleLogout} />
              </View>
            </View>            
            <View>
              <Text style={styles.title}>@2024 Tport</Text>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
      <ContactUs />
    </SafeAreaView>
  );
}

export default Home;
