import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button,Alert } from 'react-native';


export default function Login() {
  
  // this.user = { mail: '', senha: ''};
  state = {
    nome:''
  }

  logar = () => {
    Alert.alert(this.state.mail, this.state.senha);
    //  Alert.alert("this.user.mail, this.user.senha");
  }

  // setMail = (mail) => {
  //   // this.setState({mail})
  //   this.user.mail = mail 
  // }

  // setSenha = (senha) => {
  //   // this.setState({senha})
  //   this.user.senha = senha
  // }

  return (
    <View style={styles.container}>
      <TextInput value={this.state.mail} onChangeText={text => this.state.mail = text}  style={styles.input} secureTextEntry={false} placeholder="Login" />
      {/* this.setMail(text) */}
      <TextInput value={this.state.senha} onChangeText={ sen => this.state.senha = sen } style={styles.input} secureTextEntry={true} placeholder="Senha" />
      {/* this.setSenha(sen) */}
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