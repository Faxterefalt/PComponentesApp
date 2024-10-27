import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Barra de búsqueda */}
      <View style={styles.searchBar}>
        <Image source={require('./images/lupa.png')} style={styles.icon} />
        <TextInput
          placeholder="Buscar..."
          style={styles.searchInput}
        />
        <Image source={require('./images/campana.png')} style={styles.icon} />
      </View>

      {/* Categorías */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
        {['Placa Base', 'Procesador', 'Memoria', 'Carcasa', 'Almacenamiento', 'Ventiladores', 'Tarjeta de video', 'Fuente de alimentación'].map((category, index) => (
          <Text key={index} style={styles.categoryText}>{category}</Text>
        ))}
      </ScrollView>

      {/* Contenido principal */}
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>En oferta</Text>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.imagePlaceholder} />
            <Text style={styles.cardTitle}>ASUS ROG Strix B760-I Gaming WiFi</Text>
            <Text style={styles.cardPrice}>450 Bs.</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.imagePlaceholder} />
            <Text style={styles.cardTitle}>ASUS ROG Maximus Z790 HERO</Text>
            <Text style={styles.cardPrice}>500 Bs.</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Nuevo</Text>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.imagePlaceholder} />
            <Text style={styles.cardTitle}>MSI MPG B550 Gaming Plus</Text>
            <Text style={styles.cardPrice}>E-ATX</Text>
          </View>
        </View>
      </ScrollView>

      {/* Menú de navegación */}
      <View style={styles.navigation}>
        <Image source={require('./images/casa.png')} style={styles.iconNav} />
        <Image source={require('./images/lista.png')} style={styles.iconNav} />
        <Image source={require('./images/usuario.png')} style={styles.iconNav} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#aaa',
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
  },
  categoryContainer: {
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  categoryText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#555',
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#eee',
  },
  sectionTitle: {
    fontSize: 20,
    marginVertical: 15,
    color: '#333',
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#ddd',
    borderRadius: 50,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  cardPrice: {
    fontSize: 14,
    color: '#666',
  },
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

export default App;
