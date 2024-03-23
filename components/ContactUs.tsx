import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './Style/GlobalStyle'

const ContactUs = () => {
  return (
    <View>
      <View style={styles.bgColorContact}>
        <Image
          source={require('../assets/chat.png')}
          style={styles.bgImg}
          alt="Logo"
        />
        <Text style={styles.btnCText}>Contact Us</Text>
      </View>
    </View>
  );
};

export default ContactUs;

