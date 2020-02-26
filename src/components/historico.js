import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, TouchableHighlight, Alert, Modal } from 'react-native';
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
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

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

        flexWrap: 'wrap',
        flexDirection: 'row',


    },
    itemName: {
        color: "#fff",
        alignItems: "flex-start",
    },
    entrar: {
        alignItems: "flex-end",
        alignSelf: "flex-end"

    },
    buttonText: {
        color: "#fff"
    },
    itemTipo: {
        position: "relative",
        bottom: 0,
        color: "#fff",
    }
});