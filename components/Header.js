import {View, Text, Platform, StyleSheet} from 'react-native';
import React from 'react';

const Header = () => <Text style={styles.encabezado}>Criptomonedas</Text>;

const styles = StyleSheet.create({
  encabezado: {
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    fontFamily: 'Lato-Black',
    backgroundColor: '#5E49E2',
    paddingBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 30,
  },
});

export default Header;
