import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image, Dimensions } from 'react-native';
export default class Login extends Component {

  state = {
  }

  logar = () => {
    // if (this.state.mail == null || this.state.mail == '')
    //   Alert.alert("Preencha o login");
    // else if (this.state.senha == null || this.state.senha == '')
    //   Alert.alert("Preencha a senha");
    // else
      this.props.navigation.navigate('Home', { login: this.state.mail });
  }


  componentDidMount = () => {
    var x = Dimensions.get('window').width;
    var y = Dimensions.get('window').height;
    console.log(x);
    console.log(y);

  }

  render() {
    return (
      <View style={styles.container}>

        <Image resizeMode='cover' source={require('../../assets/imagens/App_logo.png')} style={[styles.imagem]} />

        {/* <Text style={styles.titulo} >Manutenção HNK</Text> */}
        <TextInput value={this.state.mail} onChangeText={text => this.state.mail = text} style={styles.input} secureTextEntry={false} placeholder="Login" />
        <TextInput value={this.state.senha} onChangeText={text => this.state.senha = text} style={styles.input} secureTextEntry={true} placeholder="Senha" />
        
        <TouchableOpacity style={styles.entrar} onPress={() => this.logar()} >
          <Text style={styles.buttonText}> Entrar </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderRadius: 5,
    backgroundColor: 'white',
    height: 40,
    width: 200,
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#333',
    paddingLeft: 5,
  },
  imagem: {
    display: "flex",
    flexShrink: 1,
    flexGrow: 0.42,
    overflow: "visible",
    width: 320,
    height: 200,
    position: "relative",
    top: -70,
  },
  entrar: {
    marginTop: 40,
    backgroundColor:"#205527",
    padding:10,
    borderRadius:5,
    fontSize:16,
    width:200,
    textAlign:"center",
  },
  buttonText:{
    color:"#fff",
    textAlign:"center",
  }
});