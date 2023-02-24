import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import Detalhes from '../Detalhes';


function Receitas( { data } ){
  const [modal, setModal] = useState(false);
  console.log(data)
  const imageReceita = {
    burrata : require("../../assets/nada.png"),
    canape : require("../../assets/canapé.png")
  }
  function toggleModal(){
    setModal(!modal)
  }
  return(
    <View style={styles.card}>
      
      <Image source={imageReceita[data.image]} style={styles.foto} />
      <Text style={styles.nome}>{ data.name }</Text>

      <View style={styles.areaBotao}>
        <Text>{data.category}</Text>
        <TouchableOpacity style={styles.botao} onPress={toggleModal}>
          <Text style={styles.botaoTexto}>LEIA MAIS</Text>
        </TouchableOpacity>
      </View>

      {modal ? <Detalhes receitas={ data } visibilidade={modal} toggle={toggleModal}/> : null}
    </View>

  );
}

const styles = StyleSheet.create({
  card:{
    backgroundColor: '#fff',
    margin: 15,
    elevation: 2,
  },
  nome:{
    padding: 15,
    fontSize: 16,
    textAlign: 'center',
  },
  foto:{
    width: "100%",
    height: 250,
  },
  areaBotao:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  botaoTexto:{
    color: '#fff',
    textAlign: 'center',
  },
  botao:{
    width: 100,
    backgroundColor: '#E45700',
    opacity: 10,
    padding: 10,
    borderRadius: 5,
  }
});

export default Receitas;