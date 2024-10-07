import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';

export const Home = () => {

    const [distance, onChangeDistance] = React.useState('');
    const [time, onChangeTime] = React.useState('');
    
    const [result, setResult] = React.useState('');
    const ConversorTempo = () => {
        return time / 60
    }
    const VelocidadeMedia = () => {
        tempo = ConversorTempo()
        n1 = distance / tempo
        return n1.toFixed(1)
    }
    const Calcular = () => {
        Vm = VelocidadeMedia()
        setResult("Sua velocidade média foi de " + Vm + " Kms por hora")
    }
    return (
        <View style={styles.container}>
            <View style={styles.titleBox}>
                <Text style={styles.title}>Calculador</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.subtitle}>Tempo</Text>
                <TextInput placeholder='Minutos' style={styles.input} multiline onChangeText={onChangeTime}></TextInput>
                <Text  style={styles.subtitle}>Distância</Text>
                <TextInput placeholder='KMs' style={styles.input} multiline onChangeText={onChangeDistance}></TextInput>
                <TouchableOpacity style={styles.btn} onPress={()=> Calcular()}><Text style={styles.white}>Calcular</Text></TouchableOpacity>
                <Text style={styles.resultado}>{result}</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start', 
        height: '100%'
    },
    titleBox: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100
    },
    title: {
        fontSize:36
    },
    subtitle: {
        fontSize:20,
        marginBottom: 20
    },
    resultado: {
        marginTop: 30
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        width: 200,
        height: 25,
        marginBottom: 30,

    },
    btn: {
        backgroundColor: 'purple',
        width: 150,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        marginTop: 50
    },
    white: {
        color: 'white'
    }
});
