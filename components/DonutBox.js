import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DonutBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DONUTS BOX</Text>
      <View style={styles.boxItem}>
        <Image source={require('../assets/box1.png')} style={styles.boxImage} />
        <Text style={styles.boxName}>SPREAD BOX ASSORTMENT</Text>
      </View>
      <View style={styles.boxItem}>
        <Image source={require('../assets/box2.png')} style={styles.boxImage} />
        <Text style={styles.boxName}>SWEET AS PI BOX</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#64B5F6',
    flex: 1,
    alignItems: 'center', // Центрирование по горизонтали
    backgroundColor: '#CE6195',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  boxItem: {
    alignItems: 'center',
    marginBottom: 30,
  },
  boxImage: {
    width: 250,
    height: 250,
    borderRadius: 20,
  },
  boxName: {
    marginTop: 10,
    color: '#fff',
    fontSize: 18,
  },
});

export default DonutBox;