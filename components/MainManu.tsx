import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function MainManu() {
  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.cards, styles.cardOne]}>
          <Image
            source={require('../assets/tempo.png')}
            style={styles.cardImg}
            alt="Logo"
          />
          <Text>YOUR FLEETS</Text>
        </View>
        <View style={[styles.cards, styles.cardTwo]}>
          <Image
            source={require('../assets/user.png')}
            style={styles.cardUserImg}
            alt="Logo"
          />
          <Text>TPORT PROFILE</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={[styles.cards, styles.cardTwo]}>
          <Image
            source={require('../assets/contracts.png')}
            style={styles.cardUserImg}
            alt="Logo"
          />
          <Text>CONTRACTS</Text>
        </View>
        <View style={[styles.cards, styles.cardOne]}>
          <Image
            source={require('../assets/tempo.png')}
            style={styles.cardImg}
            alt="Logo"
          />
          <Text>ALLOTTED CONTRACTS</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={[styles.cards, styles.cardTwo]}>
          <Image
            source={require('../assets/transprt-places.png')}
            style={styles.cardTplaceImg}
            alt="Logo"
          />
          <Text>CONTRACTS</Text>
        </View>
        <View style={[styles.cards, styles.cardOne]}>
          <Image
            source={require('../assets/alerts.png')}
            style={styles.cardAlertImg}
            alt="Logo"
          />
          <Text>ALERTS</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={[styles.cards, styles.cardTwo]}>
          <Image
            source={require('../assets/history.png')}
            style={styles.cardHistoryImg}
            alt="Logo"
          />
          <Text>HISTORY</Text>
        </View>
        <View style={[styles.cards, styles.cardNoBg]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  cards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    height: 180,
    borderRadius: 30,
    margin: 10,
  },
  cardOne: {
    // backgroundColor: "#d62828",
    backgroundColor: 'rgb(240 72 69)',
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#000000',
    shadowOpacity: 1,
    textShadowRadius: 2,
  },
  cardTwo: {
    // backgroundColor: "#007BA7",
    backgroundColor: 'rgb(23 93 162)',
  },
  cardThree: {
    backgroundColor: '#50C878',
  },
  cardImg: {
    width: 110,
    height: 55,
    margin: 5,
    padding: 5,
  },
  cardUserImg: {
    width: 65,
    height: 65,
    margin: 5,
    padding: 5,
  },
  cardTplaceImg: {
    width: 100,
    height: 60,
    margin: 5,
    padding: 5,
  },
  cardAlertImg: {
    width: 70,
    height: 65,
    margin: 5,
    padding: 5,
  },
  cardHistoryImg: {
    width: 70,
    height: 60,
    margin: 5,
    padding: 5,
  },
  cardNoBg: {
    backfaceVisibility: 'visible',
  },
});
