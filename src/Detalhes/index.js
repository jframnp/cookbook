import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import * as data from '../services/data';
import { useRef } from "react";
import Modal from "react-native-modal";
import YoutubePlayer from "react-native-youtube-iframe";

function Detalhes({ receitas, visibilidade, toggle }) {
  const playerRef = useRef();

  return (
    <Modal isVisible={visibilidade}>

      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.btnVoltar} onPress={toggle}>
            <Text style={styles.texto}>Voltar</Text>
          </TouchableOpacity>
          <ScrollView>
            <Text style={styles.titulo_modal}>{receitas.name}</Text>
            <Text style={styles.tituloSinopse}>Ingredientes</Text>
            {receitas.ingredientes.map((ingrediente, index) => {
              return (
                <Text
                  key={index}
                  style={styles.sinopse}
                > * {ingrediente}</Text>
              );
            })}
            <Text style={styles.tituloSinopse}> Modo de Preparo</Text>
            {receitas.modo_de_preparo.map((modo_de_preparo, index) => {
              return (
                <Text
                  key={index}
                  style={styles.sinopse}
                > * {modo_de_preparo}</Text>
              );
            })}
            <View style={styles.video}>
              <YoutubePlayer
                ref={playerRef}
                height={"80%"}
                width={"90%"}
                videoId={receitas.id_video}
                webViewStyle={{ opacity: 0.99 }}
              />
            </View>

          </ScrollView>
        </View>
      </View>
    </Modal>

  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    width: '90%',
    height: '90%',
    backgroundColor: '#F5F6F6',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  btnVoltar: {
    backgroundColor: '#e52246',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  texto: {
    color: '#fff',
    fontSize: 16,
  },
  titulo: {
    textAlign: 'center',
    color: '#fff',
    padding: 10,
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  tituloSinopse: {
    color: '#000',
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 10,
    fontWeight: 'bold',
    top: 25,
  },
  sinopse: {
    display: 'flex',
    flexDirection: 'column',
    color: "#000",
    marginLeft: 10,
    marginRight: 10,
    top: 20

  },
  titulo_modal: {
    display: 'flex',
    color: "#000",
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    top: 10,
  },

  video: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
});


export default Detalhes;