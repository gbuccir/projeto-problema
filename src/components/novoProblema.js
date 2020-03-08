import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ManutencaoEnum from '../utils/enums'
import * as ImagePicker from 'expo-image-picker';
import DdCda from './ddCda';

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
    // this.state.idUsuario = this.props.navigation.getParam('login');
    if (!this.state.correcaoTipo)
      Alert.alert("Escolha um tipo de manutenção!");
    else if (!this.state.descricao)
      Alert.alert("Descreva brevemente o problema.");
    else{
      Alert.alert("Salvo com sucesso!");
      this.props.navigation.navigate('Home', { login: this.props.navigation.getParam('login') });
    }
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

  render() {
    const { navigation } = this.props;
    const usuario = navigation.getParam('login');
    let { image } = this.state;

    return (
      <SafeAreaView >
        <ScrollView >
          <View style={styles.container}>
            <Image resizeMode='contain' source={require('../../assets/imagens/App_logo.png')} style={[styles.imagem]} />

            <DdCda />

            <Text style={styles.txtOrientacao}>Se quiser escolha uma foto </Text>
            <View style={styles.estiloImagem}>
              {/* {image && */}
              <View style={{ borderWidth: 1 }}>
                <Image source={{ uri: image }} style={styles.captura} />
              </View>
              {/* } */}
              <View >
                <TouchableOpacity onPress={() => this.tiraFoto()} style={styles.botao}>
                  <Text style={styles.buttonText}> Escolher </Text>
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.txtOrientacao}>Qual problema ? </Text>
            <TextInput style={styles.input} value={this.state.descricao} onChangeText={text => this.state.descricao = text} placeholder="Descreva o problama" ></TextInput>


            <Text style={styles.txtOrientacao}>Tipo de manutenção? </Text>
            <View style={styles.estiloImagem}>

              <TouchableOpacity onPress={() => this.setTipoManutencao(ManutencaoEnum.Preventiva)} style={styles.tipoPreventiva}>
                <Text style={styles.buttonText}> Preventiva </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.setTipoManutencao(ManutencaoEnum.Corretiva)} style={styles.tipoCorrecao}>
                <Text style={styles.buttonText}> Corretiva </Text>
              </TouchableOpacity>
              {/* 
            <Button style={styles.tipoPreventiva} title="Preventiva" onPress={() => this.setTipoManutencao(ManutencaoEnum.Preventiva)} />
            <Button style={styles.tipoCorrecao} title="Corretiva" onPress={() => this.setTipoManutencao(ManutencaoEnum.Corretiva)} /> */}
            </View>


            <TouchableOpacity onPress={() => this.salvar()} style={styles.Save}>
              <Text style={styles.buttonText}> Salvar </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView >
    );
  };
}

NovoProblema.navigationOptions = {
  title: 'Novo Problema',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center"
  },
  imagem: {
    display: "flex",
    flexShrink: 1,
    flexGrow: 0.46,
    overflow: "visible",
    width: 330,
    height: 250,
    position: "relative",
    top: -35,
    left: 0,
    marginBottom: -30,
  },
  txtOrientacao: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
  },
  botao: {
    marginTop: 15,
    backgroundColor: "#205527",
    padding: 5,
    borderRadius: 5,
    width: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginLeft: 10,
  },
  captura: {
    width: 200,
    height: 200,
    borderWidth: 1,
  },
  estiloImagem: {
    width: 330,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
    textAlign: "center",
    justifyContent: "space-around"
  },
  input: {
    borderRadius: 5,
    backgroundColor: 'white',
    height: 40,
    width: 200,
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#333',
    paddingLeft: 5,
  },
  tipoPreventiva: {
    backgroundColor: "#e6d712",
    padding: 5,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  tipoCorrecao: {
    backgroundColor: "#e30e0e",
    padding: 5,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  Save: {
    backgroundColor: "#205527",
    borderRadius: 5,
    textAlign: "center",
    width: 200,
    marginTop: 35,
    padding: 5,
  }
});