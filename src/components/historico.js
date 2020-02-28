import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, TouchableHighlight, Alert, Modal, Image } from 'react-native';
import DdCda from './ddCda'

export default class Historico extends Component {

    state = {
        data: [
            { id: 0, full_name: 'Problema 1', tipo: "Manutencao" },
            { id: 1, full_name: 'Problema 2', tipo: "Preventiva" },
            { id: 2, full_name: 'Problema 3', tipo: "Manutencao" },
            { id: 3, full_name: 'Problema 4', tipo: "Preventiva" },
            { id: 4, full_name: 'Problema 5', tipo: "Preventiva" },
        ],
        modalVisible: false,
        corDoProblema: "",
        modalItem: {}
    };

    abrirDetalhes = () => {
        console.log(this.state.modalVisible)
        this.setState({ modalVisible: true });
        console.log(this.state.modalVisible)
    }


    setModalVisible(visible, item) {
        this.setState({ modalVisible: visible });
        this.setState({ modalItem: item })
    }


    renderItem = ({ item }) => (

        <View style={styles.listItem}>
            {/* <View  style={styles.borda}></View> */}
            <Text style={styles.itemName}>{item.full_name}</Text>
            <Text style={styles.itemTipo}>{item.tipo}</Text>

            <TouchableOpacity style={styles.entrar} onPress={this.setModalVisible.bind(this, true, item)} >
                <Text style={styles.buttonText}> Entrar </Text>
            </TouchableOpacity>
        </View>
    );


    render() {
        const { navigation } = this.props;
        const usuario = navigation.getParam('login');

        return (

            <>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <Text>{this.state.modalItem.full_name}!</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible, {});
                                }}>
                                <Text>Fechar</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <Image resizeMode='contain' source={require('../../assets/App_logo.png')} style={[styles.imagem]} />

                <SafeAreaView style={styles.container}>
                    <DdCda />
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id} />

                    {/* <Button  onPress={() => this.logar()} title="Salva" /> */}
                </SafeAreaView>

            </>
        );
    };
}

Historico.navigationOptions = {
    title: "Histórico"
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        paddingHorizontal: 20,
    },
    listItem: {
        backgroundColor: '#205527',
        marginTop: 20,
        padding: 30,
        width: 300,
        // flexWrap: 'wrap',
        // flexDirection: 'row',
    },
    itemName: {
        color: "#fff",
        position: "absolute",
        top: 10,
        left: 10,
        textAlign: "center",
    },
    entrar: {
        position: "absolute",
        top: 15,
        right: 10,
        backgroundColor: "#C3C3C3",
        padding: 5,
    },
    buttonText: {
        color: "#fff"
    },
    itemTipo: {
        position: "absolute",
        top: 35,
        left: 10,
        fontSize: 12,
        color: "#fff",
    },
    imagem: {
        display: "flex",
        flexShrink: 1,
        flexGrow: 0.25,
        overflow: "visible",
        width: 230,
        height: 50,
        position: "relative",
        top: -20,
        left: 60,
        marginBottom: -40
    },
});