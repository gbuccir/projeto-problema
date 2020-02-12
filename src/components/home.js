import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native';
;


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
        <Image resizeMode='cover' source={require('../../assets/App_logo.png')} style={[styles.imagem]} />
        {/* <Text style={styles.userlogado}>{usuario}</Text> */}

        <Text style={[styles.subheader]}>Bem-vindo {usuario}</Text>
        <Text style={[styles.subheaderdois]}>O que gostaria de fazer ?</Text>

        <TouchableOpacity style={styles.opcoes} onPress={() => this.irParaNovo(usuario)} >
          <Text style={styles.buttonText}> Reportar problema</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcoes} onPress={() => this.irParaHistorico(usuario)} >
          <Text style={styles.buttonText}> Histórico </Text>
        </TouchableOpacity>

      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    display: "flex",
    flexShrink: 1,
    flexGrow: 0.46,
    overflow: "visible",
    width: 320,
    height: 250,
    position: "relative",
    top: -70,
  },
  userlogado: {
    position: 'absolute',
    top: 0,
  },
  opcoes: {
    marginTop: 15,
    backgroundColor: "#205527",
    padding: 15,
    borderRadius: 5,
    width: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 18
  },
  subheader: {
    fontWeight: "bold",
    fontSize: 30,
    position: "relative",
    top: -30,
    marginBottom: 10,
  },
  subheaderdois: {
    fontSize: 20,
    position: "relative",
    top: -30,
    
  }
});