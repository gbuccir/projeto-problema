import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';


export default class DdCda extends Component {

    state = {}

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label} >CDA Selecionado | </Text>
                <Picker style={styles.picker} placeholder="CDA" selectedValue={this.state.language} onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                    <Picker.Item label="CDA SALVADOR BR" value="1" />
                    <Picker.Item label="CDA SALVADOR CENTRO" value="2" />
                    <Picker.Item label="DF GOIANIA" value="3" />
                    <Picker.Item label="CDA BENEVIDES" value="4" />
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
            </View>
        )
    }

}

const styles = StyleSheet.create({
    label: {
        width: 110,        
    },
    picker: {
        width: 210,
        fontSize: 14,
    },
    container: {
        width: 330,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        alignItems: "center",
        borderWidth: 1,
    }
})