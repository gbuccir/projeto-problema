import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, TouchableHighlight, Alert, Modal, Image, LayoutAnimation } from 'react-native';
import DdCda from './ddCda'
import ManutencaoEnum from '../utils/enums'

export default class Historico extends Component {

    state = {
        data: [
            { id: 0, full_name: 'Vazamento no telhado', tipo: "Corretiva", tipoEnum: 2, descricao: "a casa caiu!!!", imagem: "" },
            { id: 1, full_name: 'Infiltração na parede', tipo: "Preventiva", tipoEnum: 1, Descricao: "", Imagem: "" },
            { id: 2, full_name: 'Problema na válvula de vaso sanitário', tipo: "Corretiva", tipoEnum: 2, Descricao: "", Imagem: "" },
            { id: 3, full_name: 'Buraco no piso', tipo: "Preventiva", tipoEnum: 1, Descricao: "Junta no piso do galpão quebrado", Imagem: "" },
            { id: 4, full_name: 'Motor do portão quebrado', tipo: "Preventiva", tipoEnum: 1, Descricao: "", Imagem: "" },
            { id: 5, full_name: 'Sistema de hidrante não funcionando', tipo: "Preventiva", tipoEnum: 1, Descricao: "", Imagem: "" },
            { id: 6, full_name: 'Sistema de alarme de incêndio não funcionando', tipo: "Preventiva", tipoEnum: 1, Descricao: "", Imagem: "" },
            { id: 7, full_name: 'Queda de disjunto frequente', tipo: "Preventiva", tipoEnum: 1, Descricao: "", Imagem: "" },
        ],
        modalVisible: false,
        corDoProblema: "",
        modalItem: {}
    };

    componentDidMount() {
          LayoutAnimation.easeInEaseOut();
      }

    abrirDetalhes = () => {
        this.setState({ modalVisible: true });
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
                <Modal animationType="slide" transparent={false} visible={this.state.modalVisible} onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                    <View style={styles.viewModal}>
                        <View>
                            <Text style={styles.Titulo}>{this.state.modalItem.full_name}!</Text>

                            <View style={styles.estiloImagem}>
                                {this.state.modalItem.image &&
                                    <View style={{ borderWidth: 1 }}>
                                        <Image source={{ uri: image }} style={styles.captura} />
                                    </View>
                                }

                                {!this.state.modalItem.image &&
                                    <View style={{ borderWidth: 1 }}>
                                        <Text>Nenhuma imagem cadastrada.</Text>
                                    </View>
                                }
                            </View>

                            <Text style={styles.txtOrientacao}>Qual problema: </Text>
                            <Text style={styles.txtDescricao}>{this.state.modalItem.descricao} </Text>


                            <Text style={styles.txtOrientacao}>Tipo de manutenção: </Text>


                            <View style={styles.estiloImagem}>

                                {this.state.modalItem.tipoEnum == ManutencaoEnum.Preventiva &&
                                    <View style={styles.tipoPreventiva}>

                                        <Text style={styles.buttonText}> Preventiva </Text>
                                    </View>
                                }

                                {this.state.modalItem.tipoEnum == ManutencaoEnum.Corretiva &&
                                    <View style={styles.tipoCorrecao}>
                                        <Text style={styles.buttonText}> Corretiva </Text>
                                    </View>
                                }
                            </View>

                            <View style={styles.estiloImagem}>
                                <TouchableHighlight style={styles.fechar}
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible, {});
                                    }}>
                                    <Text style={styles.buttonText}>Fechar</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Image resizeMode='contain' source={require('../../assets/imagens/App_logo.png')} style={[styles.imagem]} />

                <SafeAreaView style={styles.container}>
                    <DdCda />
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => item.id.toString()}
                        />
                        {/* keyExtractor={item => item.id} */}
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
    tipoPreventiva: {
        backgroundColor: "#e6d712",
        padding: 5,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: 100,
    },
    tipoCorrecao: {
        backgroundColor: "#e30e0e",
        padding: 5,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: 100,
    },
    viewModal: {
        marginTop: 22,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    Titulo: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
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
    txtOrientacao: {
        fontSize: 16,
        marginTop: 5,
        marginBottom: 5,
        textAlign: "center",
        fontWeight: "bold",
    },
    fechar: {
        backgroundColor: "#205527",
        padding: 5,
        borderRadius: 5,
        width: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        position: "relative",
        top: 180,
    },
    txtDescricao: {
        textAlign: "center",
        marginBottom: 10,
    }
});