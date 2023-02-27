import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	Modal,
} from "react-native";
import Detalhes from "../Detalhes";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Cookie_400Regular } from "@expo-google-fonts/cookie";
import { ScrollView } from "react-native-gesture-handler";

function Receitas({ data }) {
	let [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Cookie_400Regular,
	});

	const [modal, setModal] = useState(false);
	const imageReceita = {
		burrata: require("../../assets/burrataTomate.jpeg"),
		canapeRicota: require("../../assets/canapeRicota.jpeg"),
		canapePao: require("../../assets/canapePao.jpeg"),
		picanha: require("../../assets/picanha.jpeg"),
		arrozFrango: require("../../assets/arrozfrango.jpeg"),
		arrozCamarao: require("../../assets/arrozCamarao.jpeg"),
		fileMignon: require("../../assets/fileMignon.jpeg"),
		moqueca: require("../../assets/moqueca.jpeg"),
		risotoVegano: require("../../assets/risotoVegano.jpeg"),
		torta: require("../../assets/tortaLiquidificador.jpeg"),
		Hossomaki: require("../../assets/Hossomaki.jpeg"),
		mousseLeite: require("../../assets/mousseLeiteNinho.jpeg"),
		mousseMilho: require("../../assets/mousseMilho.jpeg"),
		mousseLimao: require("../../assets/mousseLimao.jpeg"),
		ganache: require("../../assets/cremeGanache.jpeg"),
	};
	function toggleModal() {
		setModal(!modal);
	}
	return (
		<View>
			<View style={styles.scroll}>
				<View style={styles.card}>
					<Image source={imageReceita[data.image]} style={styles.foto} />
					<Text style={styles.nome}>{data.name}</Text>

					<View style={styles.areaBotao}>
						<Text style={styles.botaoTexto2}>{data.category}</Text>
						<TouchableOpacity style={styles.botao} onPress={toggleModal}>
							<Text style={styles.botaoTexto}>Leia mais</Text>
						</TouchableOpacity>
					</View>
					{modal ? (
						<Detalhes
							receitas={data}
							visibilidade={modal}
							toggle={toggleModal}
						/>
					) : null}
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: "#fff",
		margin: 15,
		elevation: 2,
		borderRadius: 25,
	},
	nome: {
		padding: 15,
		fontSize: 16,
		textAlign: "center",
		fontSize: 22,
		fontFamily: "Poppins_400Regular",
	},
	foto: {
		width: "100%",
		height: 250,
	},
	areaBotao: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		marginBottom: 8,
	},
	botaoTexto: {
		color: "#fff",
		textAlign: "center",
		fontSize: 18,
		fontFamily: "Poppins_400Regular",
	},
	botaoTexto2: {
		textAlign: "center",
		fontSize: 18,
		fontFamily: "Poppins_400Regular",
	},
	botao: {
		width: 100,
		backgroundColor: "#E45700",
		opacity: 10,
		padding: 10,
		borderRadius: 5,
	},
});

export default Receitas;
