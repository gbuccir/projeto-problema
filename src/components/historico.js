import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, TouchableHighlight, Alert, Modal } from 'react-native';
import DdCda from './ddCda'

export default class Historico extends Component {

    state = {
        data: [
            { id: 0, full_name: 'Problema 1' },
            { id: 1, full_name: 'Problema 2' },
            { id: 2, full_name: 'Problema 3' },
            { id: 3, full_name: 'Problema 4' },
            { id: 4, full_name: 'Problema 5' },
        ],
        modalVisible: false
    };

    abrirDetalhes = () => {
        console.log(this.state.modalVisible)
        // this.state.modalVisible = true;
        this.setState({ modalVisible: true });
        console.log(this.state.modalVisible)
    }


    setModalVisible(visible) {
        console.log(this.state.modalVisible)
        this.setState({ modalVisible: visible });
        console.log(this.state.modalVisible)
    }



    renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <Text>{item.full_name}</Text>

            <TouchableOpacity style={styles.entrar} onPress={() => this.setModalVisible(true)} >
                <Text style={styles.buttonText}> Entrar </Text>
            </TouchableOpacity>

        </View>
    );

    // logar = () =>{
    //     this.state.cda = this.props.getParam('language');
    //     console.log(this.state)
    // }

    render() {
        const { navigation } = this.props;
        const usuario = navigation.getParam('login');
        // this.state.modalVisible = false;

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
                            <Text>Hello World!</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
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
        backgroundColor: '#EEE',
        marginTop: 20,
        padding: 30,
    },
});