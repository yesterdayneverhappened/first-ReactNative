import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, SafeAreaViewComponent } from 'react-native';

export default function Header() {
  return (
    <ImageBackground
      source={require('../assets/back.png')} // Замените на свой URL
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.header}>
        <Text style={styles.menuItem}>Home</Text>
        <Text style={styles.menuItem}>Menu</Text>
        <Text style={styles.menuItem}>About Us</Text>
      </View>
      <Text style={styles.title}>DONUTS ARE JUICIER</Text>
      <Text style={styles.subtitle}>THAN YOUR MOM</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>MAKE AN ORDER</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    height: 450,
    zIndex:-10,
  },
  header: {
    marginTop: -100,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 60,
    zIndex:100,
  },
  menuItem: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    zIndex: 1000,
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#CE6195',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});