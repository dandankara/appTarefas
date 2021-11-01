import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, Keyboard } from 'react-native';
import Login from './src/components/Login/Login';
import TaskList from './src/components/TaskList/TaskList';

import firebase from './src/services/firebaseConnection'

export default function App() {

  const [user, setUser] = useState(null);

  //Responsável por 'ver' quando alguem digita algo dentro do input
  const [newTask, setNewTask] = useState('')

  const [addTask, setAddTask] = useState([])

  // se não tiver user mostra o login
  if (!user) {
    // Como eu vou passar algum user para o setUser, vai deixar de ser null e vai mostrar as Tarefas
    return <Login changeStatus={(user) => setUser(user)} />
  }

  function AddTarefa() {
    if (newTask === '') {
      alert('Preencha o campo, por favor');
      // PS se não tiver esse return vai criar uma tarefa no bd com nome: ""
      return;
    }

    // vai passar o user no child por conta da chave aleatória que vai gerar
    let tarefasAdd = firebase.database().ref('tarefas').child(user);
    let keyRandom = tarefasAdd.push().key;

    tarefasAdd.child(keyRandom).set({
      // aqui dentro vai ser oq vai ser cadastrado no bd
      nome: newTask
    })
      .then(() => {
        const data = {
          key: keyRandom,
          nome: newTask,
        };

        // pra add os que já tem e acrescentar mais uma
        setAddTask(oldTasks => [...oldTasks, data])
      })

    Keyboard.dismiss()
    setNewTask('')
  }

  function DeleteItem(key) {
    // vai acessar tarefas, dps o id e a tarefa que eu cliquei 
    firebase.database().ref('tarefas').child(user).child(key).remove()
    .then(() => {
      // percorre toda a lista conforme oq eu passar
      // procura todos os itens que são diferentes que eu estou querendo deletar
      const FindTask = addTask.filter( item => item.key !== key)
      setAddTask(FindTask)
      alert('Deletada com sucesso')
      return;
    })
  }

  function EditItem(data) {
    console.log(`Item Clicado ${data}`)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TaskView}>
        <TextInput
          placeholder="O que vai ser feito hoje?"
          value={newTask}
          onChangeText={(textInput) => setNewTask(textInput)}
          style={styles.TextInput}
        />

        <TouchableOpacity style={styles.ButttonAddTask} onPress={AddTarefa}>
          <Text style={styles.TextButton}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={addTask}
        // KeyExtractor aponta na nossa lista qual é a chave única na nossa lista 
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          //monta o componente
          <TaskList data={item} deleteItem={DeleteItem} editItem={EditItem} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    marginHorizontal: 10
  },

  TaskView: {
    flexDirection: 'row'
  },

  TextInput: {
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 10
  },

  ButttonAddTask: {
    backgroundColor: 'black',
    width: "20%",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 5
  },

  TextButton: {
    color: '#fff',
    fontSize: 30
  }
});
