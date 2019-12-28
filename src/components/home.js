import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { render } from 'react-dom';


export default class Home extends Component {

  irParaHistorico = (user) => {
    this.props.navigation.navigate('Historico' , {login: user});
  }

  state = {
  }

  irParaNovo = (user) => {
    this.props.navigation.navigate('NovoProblema', {login:user});
  }

  render() {
    const { navigation } = this.props;
    const usuario = navigation.getParam('login');

    return (
      <View style={styles.container}>
        <Text>{usuario}</Text>
        <Button
          title="Criar novo problema"
          color="#f194ff"
          onPress={() => this.irParaNovo(usuario)} />

        <Button
          title="Histórico"
          color="#f194ff"
          onPress={() => this.irParaHistorico(usuario)} />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});