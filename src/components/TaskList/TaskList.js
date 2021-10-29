import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

//Faço uma descontrução da propriedade chamando especificamente a props que passei no componente
export default function TaskList({ data, deleteItem, editItem }) {
    return (
        <View style={styles.container}>
            {/* Esse touch, não apresenta nenhuma feedback VISUAL */}
            <TouchableWithoutFeedback onPress={() => editItem(data)}>
                <Text style={styles.TextList}> {data.key}-{data.nome} </Text>
            </TouchableWithoutFeedback>

            <TouchableOpacity style={styles.ButtonDelete} onPress={() => deleteItem(data.key)}>
                <Text style={styles.TextButton}>X</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#211d1d',
        marginVertical: 10,
        padding: 10,
        borderRadius: 10,
    },

    TextList: {
        color: '#fff'
    },

    ButtonDelete: {
        backgroundColor: 'red',
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },

    TextButton: {
        fontSize: 20
    }
})