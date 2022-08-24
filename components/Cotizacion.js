import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Cotizacion = ({resultado}) => {
  if (Object.keys(resultado).length === 0) return null;

  return (
    <View style={styles.resultado}>
      <Text style={styles.texto}>
        <Text style={styles.span}>{resultado.PRICE}</Text>
      </Text>
      <Text style={styles.texto}>
        {' '}
        Precio mas alto del dia
        <Text style={styles.span}>{resultado.HIGHDAY}</Text>
      </Text>
      <Text style={styles.texto}>
        {' '}
        Precio mas bajo del dias
        <Text style={styles.span}>{resultado.LOWDAY}</Text>
      </Text>
      <Text style={styles.texto}>
        {' '}
        Variacion ultimas 24 horas
        <Text style={styles.span}>{resultado.CHANGEPCT24HOUR}</Text>
      </Text>
      <Text style={styles.texto}>
        {' '}
        Ultima actualizacion
        <Text style={styles.span}>{resultado.LASTUPDATED}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultado: {
    backgroundColor: '#5E49E2',
    padding: 20,
  },
  texto: {
    color: '#FFF',
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    marginBottom: 10,
  },
  precio: {
    fontSize: 38,
  },
  span: {
    fontFamily: 'Lato-Black',
  },
});

export default Cotizacion;