// componentes/NavigationBar.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const NavigationBar = () => (
  <View style={styles.navigation}>
    <Image source={require('../images/casa.png')} style={styles.iconNav} />
    <Image source={require('../images/lista.png')} style={styles.iconNav} />
    <Image source={require('../images/usuario.png')} style={styles.iconNav} />
  </View>
);

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#4a3b8f',
  },
  iconNav: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
});

export default NavigationBar;
