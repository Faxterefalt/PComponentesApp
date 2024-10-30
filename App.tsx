import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { View, StyleSheet } from 'react-native';
import SearchBar from './componentes/SearchBar';
import Categories from './componentes/Categories';
import ContentSection from './componentes/ContentSection';
import NavigationBar from './componentes/NavigationBar';
import BuildPage from './componentes/pages/BuildPage';
//import UserPage from './componentes/pages/UserPage';

// pantallas nativas
enableScreens();

const Stack = createStackNavigator();

const HomeScreen = () => {
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

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BuildPage" component={BuildPage} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
});

export default App;
