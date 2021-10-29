import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [type, setType] = useState('login')


  function Login() {
    alert('funciona karai')
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Seu email"
        value={email}
        onChangeText={(textEmail) => setEmail(textEmail)}
        style={styles.InputText}
      />

      <TextInput
        placeholder="**********"
        value={password}
        onChangeText={(textPassword) => setPassword(textPassword)}
        style={styles.InputText}
      />

      <TouchableOpacity style={styles.ButtonLogin} onPress={Login}>
        <Text style={styles.TextButton}>
          {type === 'login' ? 'Acessar' : 'Cadastrar'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setType(type => type === 'login' ? 'Cadastrar' : 'login')}>
        <Text>
          {type === 'login' ? 'Criar uma conta' : 'Já possou uma conta'}
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  InputText: {
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
    height: 40,
    padding: 10,
    marginBottom: 10
  },

  ButtonLogin: {
    backgroundColor: 'blue',
    width: '80%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 5
  },

  TextButton: {
    color: '#fff',
    fontSize: 15
  }
});
