import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'
import firebase from '../../services/firebaseConnection'


export default function Login( {changeStatus} ) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [type, setType] = useState('login')


  function Login() {
    // Verificação para ver qual metódo o user quer, logar ou cadastrar
    if (type === 'login') {

      // Faz a verificação por email e senha e loga no app
      const user = firebase.auth().signInWithEmailAndPassword(email, password)
        // then quando der certo
        .then((user) => {
          // quando fizer o login chamar essa propriedade passando o Id do cadastro
          changeStatus(user.user.uid)
        })
        .catch((err) => {
          console.log(err)
          alert('Deu ruim')
          return;
        })
    } else {
      //Vai ser cadastrar
      const user = firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
          changeStatus(user.user.uid)
        })
        .catch((err) => {
          console.log(err)
          alert('Deu ruim, tenta de novo')
          return;
        })
    }
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
