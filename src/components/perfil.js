import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import DdCda from './ddCda';

export default class Perfil extends Component {

    state = {
        nome: "",
        nascimento: "",
        email: "",
        telefone: "",
        funcao: "",
    }


    salvar = () => {
        if (!this.state.nome)
            Alert.alert("Preencha o nome.");
        else if (!this.state.nascimento)
            Alert.alert("Preencha a data de nascimento.");
        else if (!this.state.email)
            Alert.alert("Preencha o e-mail.");
        else if (!this.state.telefone)
            Alert.alert("Preencha o telefone.");
        else if (!this.state.email)
            Alert.alert("Insira a sua função.");
        else {
            Alert.alert("Salvo com sucesso!");
            this.props.navigation.navigate('Home', { login: this.props.navigation.getParam('login') });
        }
    }



    render() {
        const { navigation } = this.props;
        const usuario = navigation.getParam('login');


        return (
            <SafeAreaView >
                <ScrollView >
                    <View style={styles.container}>
                        <Image resizeMode='contain' source={require('../../assets/imagens/App_logo.png')} style={[styles.imagem]} />

                        <Text>Nome</Text>
                        <TextInput style={styles.input} multiline={true}
                            value={this.state.descricao} onChangeText={text => this.state.nome = text} ></TextInput>

                        <Text>Data de nascimento</Text>
                        <TextInput style={styles.input} multiline={true}
                            value={this.state.descricao} onChangeText={text => this.state.nascimento = text} ></TextInput>


                        <Text>E-mail</Text>
                        <TextInput style={styles.input} multiline={true}
                            value={this.state.descricao} onChangeText={text => this.state.email = text} ></TextInput>

                        <Text>Função</Text>
                        <TextInput style={styles.input} multiline={true}
                            value={this.state.descricao} onChangeText={text => this.state.funcao = text} ></TextInput>

                        <Text>Telefone</Text>
                        <TextInput style={styles.input} multiline={true}
                            value={this.state.descricao} onChangeText={text => this.state.telefone = text} ></TextInput>


                        <Text>Local de trabalho</Text>
                        <DdCda />


                        <TouchableOpacity onPress={() => this.salvar()} style={styles.Save}>
                            <Text style={styles.buttonText}> Salvar </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView >
        );
    };
}

Perfil.navigationOptions = {
    title: 'Perfil',
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
    botaoEscolher: {
        marginTop: 15,
        backgroundColor: "#205527",
        padding: 5,
        borderRadius: 5,
        width: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginLeft: 0,
    },
    captura: {
        width: 330,
        height: 200,
        borderWidth: 1,
        textAlign: "center",
    },
    estiloFoto: {
        width: 330,
        marginTop: 20,
        marginBottom: 40,
        textAlign: "center",
        alignItems: "center",
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
        alignSelf: 'stretch',
        marginBottom: 10,
        margin: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 5,
    },
    tipoPreventiva: {
        backgroundColor: "#e6d712",
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    tipoCorrecao: {
        backgroundColor: "#e30e0e",
        paddingHorizontal: 40,
        paddingVertical: 10,
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
        padding: 10,
    }
});