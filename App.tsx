import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Router from './src/utils/route'

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>ULA TUTUUUUUUUU</Text>
    //   <Text>Vamos ver se funciona mesmo</Text>
    // </View>
    <Router />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    color:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
