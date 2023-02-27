import { View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Cookie_400Regular } from '@expo-google-fonts/cookie';


export default function Header() {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Cookie_400Regular,
  });

  return (
    <View>
    <StatusBar backgroundColor='#E45700' barStyle= "white=content"/>
    <View style={styles.container}>
      <View style={styles.content} >
        <View style={styles.texto}>
          <Text style={styles.nome_pagina}>COOKBOOK</Text>
        </View>
      </View>
   </View>
   </View>
    
  );
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#E45700",
		height: 70,
		width: "100%",
	},
	content: {
		flex: 1,
		alignItems: "center",
		flexDirection: "column",
		marginTop: 2,
	},
	nome_pagina: {
		color: "#fff",
		fontSize: 32,
		fontFamily: "Poppins_400Regular",
	},
	texto: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});