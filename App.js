import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, ScrollView } from 'react-native';
import Header from './components/Header.js';
import DonutList from './components/DonutList.js';
import NewDonut from './components/NewDonuts.js';
import DonutBox from './components/DonutBox.js';
import './assets/style.css'


export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header />
      <DonutList />
      <NewDonut />
      <DonutBox />
    </ScrollView>
    <StatusBar style="auto" />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});