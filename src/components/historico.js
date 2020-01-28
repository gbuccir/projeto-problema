import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Button, Picker, Alert } from 'react-native';
import { render } from 'react-dom';
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
    };


    renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <Text>{item.full_name}</Text>
        </View>
    );

    // logar = () =>{
    //     this.state.cda = this.props.getParam('language');
    //     console.log(this.state)
    // }

    render() {
        const { navigation } = this.props;
        const usuario = navigation.getParam('login');


        return (
            <SafeAreaView style={styles.container}>

                {/* <DdCda /> */}
                <Text>CDA Selecionado</Text>
                <Picker placeholder="CDA" style={{ height: 50, width: 100 }} selectedValue={this.state.language} onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
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

                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />

                {/* <Button  onPress={() => this.logar()} title="Salva" /> */}
            </SafeAreaView>
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