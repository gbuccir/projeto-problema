import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ManutencaoEnum from '../utils/enums'


export default class NovoProblema extends Component {


  state = {
    problema: {
      correcaoTipo: null,
      descricao: '',
      cda: null,
      foto: null
    }
  }

  setTipoManutencao = (tipo) => {
    this.state.correcaoTipo = tipo;
  }

  salvar = () => {
    this.state.idUsuario = this.props.navigation.getParam('login');
  }

  render() {
    const { navigation } = this.props;
    const usuario = navigation.getParam('login');

    return (
      <View style={styles.container}>
        <Text>Escolha o CDA</Text>
        <Picker placeholder="CDA selecionado" style={{height: 50, width: 100}} selectedValue={this.state.language} onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>

        <Text>Qual problema ? </Text>
        <TextInput value={this.state.descricao} onChangeText={text => this.state.descricao = text} placeholder="Descreva o problama" ></TextInput>

        <Text>Tipo de manutenção? </Text>
        <Button title="Preventiva" onPress={() => this.setTipoManutencao(ManutencaoEnum.Preventiva)} />
        <Button title="Corretiva" onPress={() => this.setTipoManutencao(ManutencaoEnum.Corretiva)} />

        {/* <Text>Se quiser tire uma foto </Text> */}

        <Button title="Salvar" onPress={() => this.salvar()} />
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