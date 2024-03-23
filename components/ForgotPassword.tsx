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
} from 'react-native';

// Navigations
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// Check type safety
import {RootStackParamList} from '../App';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ContactUs from './ContactUs';
import styles from './Style/GlobalStyle';
import Header from './Header';

type ForgotPassprops = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPassword'
>;

function ForgotPassword({navigation}: ForgotPassprops): React.JSX.Element {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

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
              <View style={styles.formcontainer}>
                <Text style={styles.title}>FORGOT PASSWORD</Text>
                <View style={styles.form}>
                  <View style={styles.input}>
                    <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      keyboardType="email-address"
                      style={styles.inputControl}
                      placeholder="User ID*"
                      placeholderTextColor="#6b7280"
                      value={form.email}
                      onChangeText={email => setForm({...form, email})}
                    />
                  </View>
                  <View style={styles.input}></View>
                  <View style={styles.formAction}>
                    <TouchableOpacity
                      onPress={() => {
                        // handle onPress
                        if (form.email != '') {                          
                          Alert.alert('Will available soon!');
                        } else {
                          Alert.alert('Please Enter User Id !');
                        }
                      }}>
                      <View style={[styles.btn, styles.bgcolorred]}>
                        <Text style={styles.btnText}>GET OTP</Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.formAction}>
                    <TouchableOpacity
                      style={{marginVertical: 15}}
                      onPress={() => {
                        // handle onPress
                        navigation.navigate('Login', {loginId: '1'});
                        // Alert.alert('Coming soon!');
                      }}>
                      <Text style={styles.formFooter}>Back to Login</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>          
        </View>
      </ScrollView>
      <ContactUs />
    </SafeAreaView>
  );
}

export default ForgotPassword;
