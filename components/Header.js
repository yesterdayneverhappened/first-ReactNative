import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, ImageBackground, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, // Позволяет контейнеру занимать всё доступное пространство
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Полупрозрачный фон для текста
    borderRadius: 10,
    marginTop: 30,
    height: 60, // Фиксированная высота для textContainer
    alignItems: 'center', // Центрирование по вертикали
  },
  title: {
    margin: 10,
    color: 'white',
    fontSize: 20,
  },
  makeOrder: {
    flex: 1,
    justifyContent: 'center', // Центрирование по вертикали
    alignItems: 'center', // Центрирование по горизонтали
    padding: 20,
    height: 200, // Фиксированная высота для makeOrder
    width: '100%',
  },
  header: {
    fontSize: 24, // Увеличенный размер шрифта
    fontWeight: 'bold',
    textAlign: 'center', // Центрирование текста
    marginBottom: 20, // Отступ снизу
    color: '#fff',
  },
  button: {
    backgroundColor: '#007BFF', // Цвет фона кнопки
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16, // Уменьшенный размер шрифта
    color: '#fff', // Цвет текста на кнопке
    textAlign: 'center', // Центрирование текста на кнопке
  },
});

export default function Header() {
  return (
    <ImageBackground
      source={require('../assets/back.png')} // Укажите путь к изображению
      style={styles.container}
    >
      <SafeAreaView style={{ flex: 1 }}> {/* Обеспечиваем безопасную область */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Home</Text>
          <Text style={styles.title}>Menu</Text>
          <Text style={styles.title}>About Us</Text>
        </View>
       
        <View style={styles.makeOrder}>
          <Text style={styles.header}>DONUTS ARE JUICIER THAN YOUR MOM</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>MAKE AN ORDER</Text>
          </TouchableOpacity>
        </View>
        
      </SafeAreaView>
      <StatusBar style="light" /> {/* Если фон темный, лучше сделать текст статус-бара светлым */}
    </ImageBackground>
  );
}