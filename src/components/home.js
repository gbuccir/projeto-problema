import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { render } from 'react-dom';


export default class Home extends Component {

  irParaHistorico = (user) => {
    this.props.navigation.navigate('Historico', { login: user });
  }

  state = {
  }

  irParaNovo = (user) => {
    this.props.navigation.navigate('NovoProblema', { login: user });
  }

  render() {
    const { navigation } = this.props;
    const usuario = navigation.getParam('login');

    return (
      <View style={styles.container}>
        <Text style={styles.userlogado}>{usuario}</Text>
        <Button style={styles.opcoes}
          title="Criar novo problema"
          color="#d5d900"
          onPress={() => this.irParaNovo(usuario)} />

        <Button style={styles.opcoes}
          title="Histórico"
          color="#d5d900"
          onPress={() => this.irParaHistorico(usuario)} />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00530d',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userlogado: {
    position: 'absolute',
    top: 0,
  },
  opcoes: {
    margin: 10
  }
});