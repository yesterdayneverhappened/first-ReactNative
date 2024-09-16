import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Header from './components/Header';

const styles = StyleSheet.create({
  
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header></Header>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


