import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavigationBar from '../NavigationBar';

const BuildPageList = ({ route }) => {
  const { categoryTitle } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{categoryTitle}</Text> {/* Asegúrate de que esté dentro de <Text> */}
        {/* Aquí puedes agregar la lista de componentes específicos para la categoría */}
      </View>

      <NavigationBar /> {/* Coloca la barra de navegación en la parte inferior */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default BuildPageList;
