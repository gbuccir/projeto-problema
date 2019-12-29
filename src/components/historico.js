import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Button, Picker, Alert } from 'react-native';
import { render } from 'react-dom';
import DdCda from './ddCda'
export default class Historico extends Component {

    state = {
        data: [
            { id: 0, full_name: 'Repo 1' },
            { id: 1, full_name: 'Repo 2' },
            { id: 2, full_name: 'Repo 3' },
            { id: 3, full_name: 'Repo 4' },
            { id: 4, full_name: 'Repo 5' },
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
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
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