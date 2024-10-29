// App.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from './componentes/SearchBar';
import Categories from './componentes/Categories';
import ContentSection from './componentes/ContentSection';
import NavigationBar from './componentes/NavigationBar';

const App = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Categories />
      <ContentSection title="En oferta" products={enOfertaProducts} />
      <ContentSection title="Nuevo" products={nuevoProducts} />
      <NavigationBar />
    </View>
  );
};

const enOfertaProducts = [
  { title: 'ASUS ROG Strix B760-I Gaming WiFi', price: '450 Bs.' },
  { title: 'ASUS ROG Maximus Z790 HERO', price: '500 Bs.' },
];

const nuevoProducts = [
  { title: 'MSI MPG B550 Gaming Plus', price: 'E-ATX' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
});

export default App;
