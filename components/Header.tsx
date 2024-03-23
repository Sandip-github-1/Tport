import React from "react";
import { Image, View } from "react-native";
import styles from './Style/GlobalStyle'


function Header(): React.JSX.Element {
    return(
        <View style={styles.headercontainer}>
        <View style={styles.header}>
          <Image
            source={require('../assets/logo.jpg')}
            style={styles.headerImg}
            alt="Logo"
          />
        </View>
      </View>
    );
}

export default Header;
