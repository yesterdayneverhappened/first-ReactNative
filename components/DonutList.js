import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DonutList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Most Popular</Text>
      <View style={styles.donutItem}>
        <Image source={require('../assets/image 1.png')} style={styles.donutImage} />
        <Text style={styles.donutName}>THE FLIP FLOP</Text>
      </View>
      <View style={styles.donutItem}>
        <Image source={require('../assets/image 3.png')} style={styles.donutImage} />
        <Text style={styles.donutName}>BEACH BALL</Text>
      </View>
      <View style={styles.donutItem}>
        <Image source={require('../assets/image 4.png')} style={styles.donutImage} />
        <Text style={styles.donutName}>THE BEACH</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Центрирование по горизонтали
    marginTop: -100,
    backgroundColor: '#CE6195',
    padding: 20,
    borderTopLeftRadius: 30, // Верхний левый угол
    borderTopRightRadius: 30, // Верхний правый угол
    borderBottomLeftRadius: 0, // Нижний левый угол
    borderBottomRightRadius: 0, // Нижний правый угол
  },
  h1: {
    fontSize: 32, // Размер шрифта
    fontWeight: 'bold', // Жирный шрифт
    color: '#fff', // Цвет текста
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },
  donutItem: {
    alignItems: 'center',
    marginBottom: 15,
  },
  donutImage: {
    width: 200,
    height: 200,
  },
  donutName: {
    color: '#fff',
    fontSize: 18,
  },
});

export default DonutList;