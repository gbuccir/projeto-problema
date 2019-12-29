import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Picker, Alert, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ManutencaoEnum from '../utils/enums'
// import ImagePicker from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';

// const ImagePicker = require('react-native-image-picker');
// import { RNCamera } from 'react-native-camera';

// import * as Permissions from 'expo-permissions';
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


  tiraFoto = async () => {

    const options = {
      base64:true
    };


    // ImagePicker.launchImageLibraryAsync(
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
    
    // );
    // RNCamera.Constants.CameraStatus = 'READY';
    // RNCamera.Constants.RecordAudioPermissionStatus = 'AUTHORIZED';
    // const granted = Permissions.askAsync(Permissions.WRITE_EXTERNAL_STORAGE);
    // this.render();
  }

  takePicture = async () => {

    // if (this.camera) {
    //   const options = { quality: 0.5, base64: true };
    //   const data = await this.camera.takePictureAsync(options)
    //   alert(data.uri);
    // }
  }


  render() {
    const { navigation } = this.props;
    const usuario = navigation.getParam('login');
    let { image } = this.state;

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

        <Text>Se quiser escolhacl uma foto </Text>
        {/* <RNCamera
          // ref={camera => { this.xamera = camera }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.off}

        /> */}

        {/* 
androidCameraPermissionOptions={ title= "Permitir camera",
            message= "deve permitir uso para foto",
            buttonPositive= "ok",
            buttonNegative= "cancelar"} */}

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