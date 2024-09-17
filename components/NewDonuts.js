import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const NewDonut = () => {
  const [imageSource, setImageSource] = useState(require('../assets/layer.png'));

  const [buttonColor1, setButtonColor1] = useState('#3F2626'); // Исходный коричневый цвет
  const [buttonColor2, setButtonColor2] = useState('#3F2626');
  const [buttonColor3, setButtonColor3] = useState('#3F2626');

  const changeImageToDonut1 = () => {
    setImageSource(require('../assets/layer.png'));
    setButtonColor1('#3787A0'); // Меняем цвет кнопки
    setButtonColor2('#3F2626'); // Возвращаем цвет остальных кнопок
    setButtonColor3('#3F2626');
  };

  const changeImageToDonut2 = () => {
    setImageSource(require('../assets/layer2.jpg'));
    setButtonColor1('#3F2626');
    setButtonColor2('#3787A0');
    setButtonColor3('#3F2626');
  };

  const changeImageToDonut3 = () => {
    setImageSource(require('../assets/layer3.jpg'));
    setButtonColor1('#3F2626');
    setButtonColor2('#3F2626');
    setButtonColor3('#3787A0');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>NEW DONUT</Text>
      <Text style={styles.subtitle}>YOU CAN CREATE YOUR OWN DONUT!</Text>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity  title="" onPress={changeImageToDonut1} style={[styles.butt, { backgroundColor: buttonColor1 }]}/>
        <TouchableOpacity  title="" onPress={changeImageToDonut2} style={[styles.butt, { backgroundColor: buttonColor2 }]}/>
        <TouchableOpacity  title="" onPress={changeImageToDonut3} style={[styles.butt, { backgroundColor: buttonColor3 }]}/>
      </View>
      <TouchableOpacity  title="MAKE A ORDER" style={styles.buttOrder}>
        <Text style={styles.buttonText}>MAKE AN ORDER</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CE6195',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 38,
    color: '#fff',
    fontWeight: 'bold', // Жирный шрифт
  },
  subtitle: {
    color: '#fff',
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 205,
    borderRadius: 30,
  },
  buttonContainer: {
    width: 250,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
  },
  butt: {
    width: 50,
    height: 50,
    backgroundColor: '#3F2626',
    borderRadius: 10,
    justifyContent: 'center', // Центрируем текст по вертикали
    alignItems: 'center', // Центрируем текст по горизонтали
  },
  buttOrder: {
    width: 200,
    height: 50,
    backgroundColor: '#3787A0',
    color: 'white',
    borderRadius: 20,
    justifyContent: 'center', // Центрирование по вертикали в родительском контейнере
    alignItems: 'center', // Центрирование по горизонтали в родительском контейнере
  },
  buttonText: {
    color: '#FFFFFF', // Белый цвет текста
    fontWeight: 'bold', // Жирный текст
    textAlign: 'center', // Центрирование текста
    fontSize: 18,
  },
});

export default NewDonut;