import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MenuBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.lineLeft}></View>
      <View style={styles.lineRight}></View>
      <View style={styles.lineLeft}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 24,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  lineLeft: {
    width: 25,
    height: 3,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    backgroundColor: '#fff'
  },
  lineRight: {
    width: 25,
    marginLeft: 7,
    height: 3,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    backgroundColor: '#fff'
  }
});

export default MenuBar;
