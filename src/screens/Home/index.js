import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View } from 'react-native';
import { Container, Title, Button } from '~/components';
import { theme } from '~/styles';

export const Home = () => {

    const [distance, onChangeDistance] = React.useState('');

    const [time, onChangeTime] = React.useState('');
    let text

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
        text = "Sua velocidade média foi de " + Vm + " Kms por hora"

    }
    return (
        <Container p={48} align={'center'}>
            <Title>Calculador</Title>
            <View style={styles.container}>
                <Title size={20} mBottom={10}>Tempo</Title>
                <TextInput placeholder='Minutos' style={styles.input} multiline onChangeText={onChangeTime}></TextInput>
                <Title size={20} mBottom={10}>Distância</Title>
                <TextInput placeholder='KMs' style={styles.input} multiline onChangeText={onChangeDistance}></TextInput>
                <Button mBottom={150} bg={'primary'} color={'white'} onPress={() => Calcular()}>Calcular</Button>
                <Title size ={18}>{text}</Title>
            </View>
            <StatusBar style="auto" />
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        width: 200,
        height: 50,
        marginBottom: 30,

    },
    btn: {
        backgroundColor: 'purple',
        color: 'white',
        width: 150,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    },
    white: {
        color: 'white'
    }
});
