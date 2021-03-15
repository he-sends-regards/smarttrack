import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Menu from './components/menu/menu';
import Navbar from './components/navbar/navbar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />

      <View>
        <Menu />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
});
