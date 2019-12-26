import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button,Alert } from 'react-native';


export default function Login() {
  
  state = {
  }

  logar = () => {
    Alert.alert(this.state.mail, this.state.senha);
  }

  return (
    <View style={styles.container}>
      <TextInput value={this.state.mail} onChangeText={text => this.state.mail = text}  style={styles.input} secureTextEntry={false} placeholder="Login" />
      <TextInput value={this.state.senha} onChangeText={ text => this.state.senha = text } style={styles.input} secureTextEntry={true} placeholder="Senha" />
      <Button
          title="Entrar"
          color="#f194ff"
          onPress={() => this.logar()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderRadius: 5,
  }
});