import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Picker, Alert } from 'react-native';
import { render } from 'react-dom';

export default class DdCda extends Component {

    state ={}

    render() {
        return (
            <View>
                <Text>CDA Selecionado</Text>
                <Picker placeholder="CDA" style={{ height: 50, width: 100 }} selectedValue={this.state.language} onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                    <Picker.Item label="CDA 1" value="java" />
                    <Picker.Item label="CDA 2" value="js" />
                </Picker>
            </View>
        )
    }

}