import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, Keyboard } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import NavigationBar from '../NavigationBar';

const BuildPage = () => {
  const categories = ["Procesador", "Placa Madre", "RAM", "Tarjeta de Video","Fuente de alimentación","Almacenamiento","Ventiladores","Case"];
  
  const [listOptions, setListOptions] = useState(["lista456", "lista7"]);
  const [selectedList, setSelectedList] = useState("");
  const [isAddingNewList, setIsAddingNewList] = useState(false);
  const [newListName, setNewListName] = useState("");

  const handleListSelect = (value) => {
    if (value === "nueva") {
      setIsAddingNewList(true);
    } else {
      setSelectedList(value);
    }
  };

  const handleAddNewList = () => {
    if (newListName.trim()) {
      setListOptions([...listOptions, newListName.trim()]);
      setSelectedList(newListName.trim());
      setNewListName("");
      setIsAddingNewList(false);
      Keyboard.dismiss();  // cierra el teclado después de agregar la lista
    }
  };

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
        {isAddingNewList ? (
          <TextInput
            style={styles.newListInput}
            placeholder="Escribe el nombre de la nueva lista..."
            value={newListName}
            onChangeText={setNewListName}
            onSubmitEditing={handleAddNewList}
            autoFocus
          />
        ) : (
          <Picker selectedValue={selectedList} onValueChange={handleListSelect}>
            <Picker.Item label="Nombre de nueva lista..." value="nueva" />
            {listOptions.map((option, index) => (
              <Picker.Item key={index} label={option} value={option} />
            ))}
          </Picker>
        )}
      </View>

      {/* categorías con botones de "Añadir", toca añadir todas */}
      <ScrollView style={styles.componentList}>
        {categories.map((category, index) => (
          <View key={index} style={styles.categoryBox}>
            <Text style={styles.categoryTitle}>{category}</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>+ Añadir</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>


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
  newListInput: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  componentList: {
    padding: 10,
  },
  categoryBox: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 16,
    color: '#333',
  },
});

export default BuildPage;
