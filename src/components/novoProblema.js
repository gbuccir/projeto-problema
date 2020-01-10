import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, Alert, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ManutencaoEnum from '../utils/enums'
import * as ImagePicker from 'expo-image-picker';


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


  tiraFoto = async () => {

    const options = {
      base64: true
    };



    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }

  }

  takePicture = async () => {

  }


  render() {
    const { navigation } = this.props;
    const usuario = navigation.getParam('login');
    let { image } = this.state;

    return (
      <View style={styles.container}>
        <Text>Escolha o CDA</Text>
          <Picker placeholder="CDA selecionado" style={{ height: 50, width: 100 }} selectedValue={this.state.language} onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
            <Picker.Item label="CDA 1" value="java" />
            <Picker.Item label="CDA 2" value="js" />
          </Picker>

        <Text>Qual problema ? </Text>
        <TextInput value={this.state.descricao} onChangeText={text => this.state.descricao = text} placeholder="Descreva o problama" ></TextInput>

        <Text>Tipo de manutenção? </Text>
        <Button title="Preventiva" onPress={() => this.setTipoManutencao(ManutencaoEnum.Preventiva)} />
        <Button title="Corretiva" onPress={() => this.setTipoManutencao(ManutencaoEnum.Corretiva)} />

        <Text>Se quiser escolha uma foto </Text>


        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        <View >
          <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
            <Text style={styles.buttonText}> SNAP </Text>
          </TouchableOpacity>
        </View>

        <Button title="Salvar" onPress={() => this.tiraFoto()} />
      </View >
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    height: 500,
    width: 500,
  },
  buttonContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center"
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20
  },
  buttonText: {
    fontSize: 14
  }
});