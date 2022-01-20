import React from 'react';
import {View,Text, Image, StyleSheet, TextInput} from 'react-native';
import logo from '../assets/logo.png'

export default function Login(){
    return <View style={styles.container}>
        
        <Image source={logo} style={styles.logo}/>    
        <View style={styles.forms}>
        <Text style={styles.label}>
            Seu Email aqui
        </Text>
    <TextInput
        style={styles.input}
        placeholder='seu email'
        placeholderTextColor='#999'
        />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 32,
        resizeMode: "contain",
        alignSelf: 'center',
        marginTop: 10
      },
    label:{
        color: '#444',
        fontWeight: 'bold',
        marginBottom: 8,
    },
    forms:{
        alignSelf: 'center',
        paddingHorizontal: 30,
        paddingTop: 30,
    },
    input:{
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    }
})