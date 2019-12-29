import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, Alert, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ManutencaoEnum from '../utils/enums'
import { RNCamera } from 'react-native-camera';
import { withNavigationFocus } from 'react-navigation'

import * as Permissions from 'expo-permissions';
// import {PermissionsAndroid} from 'react-native';




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


  tiraFoto = () => {
    RNCamera.Constants.CameraStatus = 'READY';
    RNCamera.Constants.RecordAudioPermissionStatus = 'AUTHORIZED';
    const granted = Permissions.askAsync(Permissions.WRITE_EXTERNAL_STORAGE);
    this.render();
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      alert(data.uri);
    }
  }


  render() {
    const { navigation } = this.props;
    const usuario = navigation.getParam('login');

    return (
      <View style={styles.container}>
        <Text>Escolha o CDA</Text>
        <Picker placeholder="CDA selecionado" style={{ height: 50, width: 100 }} selectedValue={this.state.language} onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>

        <Text>Qual problema ? </Text>
        <TextInput value={this.state.descricao} onChangeText={text => this.state.descricao = text} placeholder="Descreva o problama" ></TextInput>

        <Text>Tipo de manutenção? </Text>
        <Button title="Preventiva" onPress={() => this.setTipoManutencao(ManutencaoEnum.Preventiva)} />
        <Button title="Corretiva" onPress={() => this.setTipoManutencao(ManutencaoEnum.Corretiva)} />

        <Text>Se quiser tire uma foto </Text>
        <RNCamera
          // ref={camera => { this.xamera = camera }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.off}

        />

        {/* 
androidCameraPermissionOptions={ title= "Permitir camera",
            message= "deve permitir uso para foto",
            buttonPositive= "ok",
            buttonNegative= "cancelar"} */}


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