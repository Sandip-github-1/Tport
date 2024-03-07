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

function Login( navigation: any ): React.JSX.Element {
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
                {/* <View style={{ backgroundColor: "#e9edc9" }}> */}
                <View style={styles.formcontainer}>
                  <Text style={styles.title}>FORGOT PASSWORD</Text>
                  {/* <Text style={styles.subtitle}>Get Access to your account and more</Text> */}
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
                          onChangeText={email => setForm({...form,email,})}
                          />
                      </View>
                      <View style={styles.input}>
                          
                      </View>
                      <View style={styles.formAction}>
                      <TouchableOpacity
                          onPress={() => {
                              // handle onPress
                              if(form.email && form.password != ''){
                                navigation.navigate("Home");
                                // Alert.alert('Successfully logged in!');
                              }else{
                                Alert.alert('Please Enter User Id and Password !');                                
                              }
                              
                          }}>
                              <View style={[styles.btn, styles.btncolorred]}>
                              <Text style={styles.btnText}>GET OTP</Text>
                              </View>
                          </TouchableOpacity>
                      </View>

                      <View style={styles.formAction}>
                      <TouchableOpacity
                          style={{ marginVertical: 15}}
                          onPress={() => {
                              // handle onPress
                              Alert.alert('Coming soon!');
                          }}>
                              <Text style={styles.formFooter}>Back to Login
                              </Text>
                          </TouchableOpacity>
                      </View>
                  </View>
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
    btnTRegister:{
      marginVertical:5
    },
    btnCRegister:{
      marginVertical:5
    },
    image: {
      // flex: 1,
      // justifyContent: 'center',
      // opacity: 1
    },
    container: {
      // padding: 10,
      flex: 1,
    },
    headercontainer:{},
    bgcontainer: {},
    formcontainer:{
      // margin:23,
      backgroundColor: "#f4f2f1",
      borderRadius:25,
      marginHorizontal:18,
      marginVertical:60
    },
    header: {
      // marginVertical: 30,
      marginVertical: 10,
    },
    headerImg: {
      width: 170,
      height: 120,
      alignSelf: 'center',
      // marginBottom: 36
      marginTop: 40
    },
    title: {
      fontSize: 27,
      fontWeight: '700',
      color: '#d90429',
      // marginBottom: 26,
      // marginTop: 26,
      marginVertical:30,
      textAlign: 'center',
      letterSpacing:1
    },
    subtitle: {
      fontSize: 15,
      fontWeight: '500',
      color: '#929292',
      marginBottom: 6,
      textAlign: 'center'
    },
    input: {
      marginBottom: 16,
      paddingHorizontal: 15
    },
    inputLabel: {
      fontSize: 17,
      fontWeight: '600',
      color: '#222',
      marginBottom: 8
    },
    inputControl: {
      // height: 44,
      borderWidth: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 18,      
      borderRadius:12,
      fontSize: 15,
      fontWeight: '500',
      color: '#222',
      // borderColor: '#001524'
      borderColor: '#d3d3d3'
    },
    form: {
      marginBottom: 24,
      flex: 1,
    },
    formAction: {
      marginVertical: 6,
      paddingHorizontal: 15
    },
    formFooter: {
      fontSize: 17,
      fontWeight:'600',
      color: '#222',
      textAlign: 'center',
      letterSpacing: 0.15,
    },
    btn: {      
      borderRadius: 8,
      borderWidth: 1,
      // borderBottomWidth: 1,
      // borderRightWidth: 1,      
    //   borderColor: '#075eec',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    btncolorblue: {
        backgroundColor: '#0053a3',
    },
    btncolorlightblue: {
        backgroundColor: '#007bff',
        // borderColor: '#007bff',
    },
    btncolorred: {
        backgroundColor: '#ee3944',
    },
    btnText : {
      fontSize: 18,
      fontWeight: '600',
      color: '#fff'
    }
  });

export default Login;
