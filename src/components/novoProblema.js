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
          <Picker.Item label="CDA SALVADOR BR" value="1" />
          <Picker.Item label="CDA SALVADOR CENTRO" value="2" />
          <Picker.Item label="DF GOIANIA" value="3" />
          <Picker.Item label="CDG BENEVIDES" value="4" />
          <Picker.Item label="CDA BRASILIA" value="5" />
          <Picker.Item label="OPERADOR LOGÍSTICO MACAPÁ" value="6" />
          <Picker.Item label="OPERADOR LOGÍSTICO MANAUS" value="7" />
          <Picker.Item label="PDA ANAPOLIS" value="8" />
          <Picker.Item label="CDA SÃO LUÍS" value="9" />
          <Picker.Item label="CDA FORTALEZA" value="10" />
          <Picker.Item label="CDA NATAL" value="11" />
          <Picker.Item label="CDA RECIFE" value="12" />
          <Picker.Item label="PDA JABOATÃO" value="13" />
          <Picker.Item label="DP RIO DE JANEIRO - PDA Jacarepagua" value="14" />
          <Picker.Item label="DP RIO DE JANEIRO - EV São Cristovão" value="15" />
          <Picker.Item label="CDA POÇOS DE CALDAS" value="16" />
          <Picker.Item label="CDA ITU" value="17" />
          <Picker.Item label="CDA EMBU" value="18" />
          <Picker.Item label="CDA GUARULHOS" value="19" />
          <Picker.Item label="CDA SACOMÃ" value="20" />
          <Picker.Item label="CDA SANTOS" value="21" />
          <Picker.Item label="CDA CONTAGEM" value="22" />
          <Picker.Item label="PDA UBERLANDIA" value="23" />
          <Picker.Item label="PDA RIBEIRÃO PRETO" value="24" />
          <Picker.Item label="CDA ITAJAÍ" value="25" />
          <Picker.Item label="CDA SÃO JOSÉ" value="26" />
          <Picker.Item label="CDA PORTO ALEGRE" value="27" />
          <Picker.Item label="CDA CURITIBA" value="28" />
          <Picker.Item label="PDA BLUMENAU" value="29" />
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