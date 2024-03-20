import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactUs = () => {
  return (
    <View >
        <View style={styles.bgColorContact}>
            <Image 
                source={require("../assets/chat.png")}   
                style={styles.bgImg}                             
                alt= "Logo"
              />
            <Text style={styles.btnText}>Contact Us</Text>
        </View>
    </View>
  )
}

export default ContactUs

const styles = StyleSheet.create({
    bgImg:{
        width: 40,
        height: 40,
        transform: [{
            rotate: '-180deg'
          }],
          top: 40,
          left: 24,
        position: 'relative'
    },
    btnText : {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',        
        // zIndex: 3,
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 53
      },
      bgColorContact : {
        flex: 1,
        bottom: 15,
        right: 40,
        position: 'absolute',
        backgroundColor: '#38ecc5',        
        borderRadius: 50,
        justifyContent: 'center',
        alignContent: 'center',
        height: 80,
      }
});