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
import ContactUs from './ContactUs';
import {LOGIN_URL} from './Constants/constant';
type Loginprops = NativeStackScreenProps<RootStackParamList, 'Login'>;

function Login({navigation}: Loginprops): React.JSX.Element {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  // Function to handle user login
  const loginUser = async (email: string, password: string) => {
    try {
      const {Result: result, Record: record} = await sendLoginRequest(
        email,
        password,
      );

      if (result === 'OK' && record.tid) {
        let userObj = {
          name: record.usrnme,
          tokenId: record.tid,
        };
        navigation.navigate('Home', {userData: userObj});
      } else {
        Alert.alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      handleLoginError(error);
    }
  };

  // Function to send login request to server
  const sendLoginRequest = async (email: string, password: string) => {
    try {
      const response = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({loginid: email, pwd: password}),
      });
      return await response.json();
    } catch (error) {
      throw new Error('Failed to connect to the server.');
    }
  };

  // Function to handle login errors
  const handleLoginError = (error: any) => {
    console.error('Login error:', error.message);
    Alert.alert('An unexpected error occurred. Please try again later.');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headercontainer}>
            <View style={styles.header}>
              <Image
                source={require('../assets/logo.jpg')}
                style={styles.headerImg}
                alt="Logo"
              />
            </View>
          </View>
          <ImageBackground
            source={require('../assets/bg.jpg')}
            resizeMode="cover"
            style={styles.image}>
            <View style={styles.bgcontainer}>
              <View style={styles.formcontainer}>
                <Text style={styles.title}>LOGIN</Text>
                <View style={styles.form}>
                  <View style={styles.input}>
                    <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      keyboardType="email-address"
                      style={styles.inputControl}
                      placeholder="User Id"
                      placeholderTextColor="#6b7280"
                      value={form.email}
                      onChangeText={email => setForm({...form, email})}
                    />
                  </View>
                  <View style={styles.input}>
                    <TextInput
                      secureTextEntry
                      style={styles.inputControl}
                      placeholder="Password"
                      placeholderTextColor="#6b7280"
                      value={form.password}
                      onChangeText={password => setForm({...form, password})}
                    />
                  </View>
                  <View style={styles.formAction}>
                    <TouchableOpacity
                      onPress={() => {
                        // handle onPress
                        if (form.email && form.password != '') {
                          loginUser(form.email, form.password);
                        } else {
                          Alert.alert('Please Enter User Id and Password !');
                        }
                      }}>
                      <View style={[styles.btn, styles.bgcolorblue]}>
                        <Text style={styles.btnText}>LOGIN</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={{marginVertical: 15}}
                    onPress={() => {
                      // handle onPress
                      navigation.navigate('ForgotPassword', {passId: '20'});
                    }}>
                    <Text style={styles.formFooter}>Forgot Login Password</Text>
                  </TouchableOpacity>
                  <View style={styles.formAction}>
                    <TouchableOpacity
                      onPress={() => {
                        // handle onPress
                        Alert.alert('Releasing soon!');
                      }}>
                      <View style={[styles.btn, styles.bgcolorred]}>
                        <Text style={styles.btnText}>Transporter Register</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        // handle onPress
                        Alert.alert('Releasing soon!');
                      }}>
                      <View style={[styles.btn, styles.bgcolorlightblue]}>
                        <Text style={styles.btnText}>Customer Register</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <ContactUs />
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btnTRegister: {
    marginVertical: 5,
  },
  btnCRegister: {
    marginVertical: 5,
  },
  image: {},
  container: {
    flex: 1,
  },
  headercontainer: {
    backgroundColor: '#ffffff',
  },
  bgcontainer: {},
  formcontainer: {
    backgroundColor: 'rgb(251, 250, 248)',
    borderRadius: 25,
    marginHorizontal: 18,
    marginVertical: 60,
  },
  header: {
    marginVertical: 10,
  },
  headerImg: {
    width: 170,
    height: 120,
    alignSelf: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#ef233c',
    marginVertical: 30,
    textAlign: 'center',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    marginBottom: 6,
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
    paddingHorizontal: 15,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 18,
    borderRadius: 8,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderColor: '#d3d3d3',
    elevation: 8,
  },
  form: {
    marginBottom: 24,
    flex: 1,
  },
  formAction: {
    marginVertical: 6,
    paddingHorizontal: 15,
  },
  formFooter: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  btn: {
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  bgcolorblue: {
    backgroundColor: '#0053a3',
  },
  bgcolorlightblue: {
    backgroundColor: '#007bff',
  },
  bgcolorred: {
    backgroundColor: '#ee3944',
  },
  btnText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
});

export default Login;
