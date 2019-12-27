import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { render } from 'react-dom';


export default class Historico extends Component {


    render() {
        const { navigation } = this.props;
        const usuario = navigation.getParam('login');

        return (
            <View style={styles.container}>
                <Text>Historico</Text>
                <Text>{usuario}</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});