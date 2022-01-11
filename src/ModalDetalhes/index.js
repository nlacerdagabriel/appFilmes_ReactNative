import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ModalDetalhes(props) {
  return (
    <View style={styles.container}>

      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.btnSair} onPress={props.voltar}>
          <Text style={styles.btnTextSair}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>{props.data.nome}</Text>

        <Text style={styles.sinopse}>Sinopse:</Text>
        <Text style={styles.descricao}>{props.data.sinopse}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    width: '95%',
    height: '80%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  btnSair:{
    backgroundColor: '#e52246',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  btnTextSair:{
    color: '#fff',
    fontSize: 16,
  }, 
  titulo:{
    textAlign: 'center',
    color: '#fff',
    padding: 10,
    fontSize: 28,
    fontWeight: 'bold',

  },
  sinopse:{
    color: '#fff',
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 20,

  },
  descricao:{
    color: '#fff',
    marginLeft: 20,
    marginRight: 20,
  }
})