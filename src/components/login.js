import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default class Login extends Component {

  state = {
  }

  logar = () => {
    if (this.state.mail == null || this.state.mail == '')
      Alert.alert("Preencha o login");
    else if (this.state.senha == null || this.state.senha == '')
      Alert.alert("Preencha a senha");
    else
      this.props.navigation.navigate('Home' , {login: this.state.mail});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo} >Projeto problema</Text>
        <TextInput value={this.state.mail} onChangeText={text => this.state.mail = text} style={styles.input} secureTextEntry={false} placeholder="Login" />
        <TextInput value={this.state.senha} onChangeText={text => this.state.senha = text} style={styles.input} secureTextEntry={true} placeholder="Senha" />
        <Button
          title="Entrar"
          color="#f194ff"
          onPress={() => this.logar()} />
      </View>
    );
  }
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
    backgroundColor: 'white',
    height: 40,
    width: 100,
  },
  titulo: {
    fontSize: 40,
    color: "white",
  }
});