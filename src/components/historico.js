import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Picker, Alert } from 'react-native';
import { render } from 'react-dom';

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

    Item({ title }) {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
            </View>
        );
    }

    renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <Text>{item.full_name}</Text>
        </View>
    );

    render() {
        const { navigation } = this.props;
        const usuario = navigation.getParam('login');


        return (
            <SafeAreaView style={styles.container}>

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