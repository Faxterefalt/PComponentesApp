// componentes/pages/BuildPage.js
import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import NavigationBar from '../NavigationBar';

const BuildPage = () => {
  return (
    <View style={styles.container}>
      {/* Logo y barra de búsqueda */}
      <View style={styles.header}>
        <Image source={require('../../images/logo.png')} style={styles.logo} />
        <TextInput placeholder="Buscar componente, build o distribuidores" style={styles.searchInput} />
        <Image source={require('../../images/usuario.png')} style={styles.userIcon} />
      </View>

      {/* Sección para generar URL */}
      <View style={styles.shareSection}>
        <Text style={styles.shareText}>¡Comparte la build con tus amigos!</Text>
        <Text style={styles.linkText}>El enlace estará aquí</Text>
      </View>

      {/* Combo box para seleccionar lista */}
      <View style={styles.comboBoxContainer}>
        <Picker>
          <Picker.Item label="Nombre de nueva lista..." value="nueva" />
          <Picker.Item label="lista456" value="lista456" />
          <Picker.Item label="lista7" value="lista7" />
        </Picker>
      </View>

      {/* Botones de categorías de componentes */}
      <ScrollView style={styles.componentList}>
        {["Procesador", "Placa Madre", "RAM", "Tarjeta de Video"].map((category, index) => (
          <TouchableOpacity key={index} style={styles.addButton}>
            <Text style={styles.addButtonText}>+ Añadir</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Barra de navegación */}
      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  logo: {
    width: 40,
    height: 40,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
    backgroundColor: '#eee',
    borderRadius: 5,
    paddingLeft: 10,
  },
  userIcon: {
    width: 30,
    height: 30,
  },
  shareSection: {
    padding: 10,
    alignItems: 'center',
  },
  shareText: {
    fontSize: 14,
    color: '#555',
  },
  linkText: {
    color: '#0066cc',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
  comboBoxContainer: {
    paddingHorizontal: 15,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  componentList: {
    padding: 10,
  },
  addButton: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  addButtonText: {
    fontSize: 16,
    color: '#333',
  },
});

export default BuildPage;
