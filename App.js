import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { receitas } from "./src/receita";
import Receitas from "./src/Receitas";
import Header from "./src/Header/header";

function App() {
	return (
		<View style={StyleSheet.container}>
			<Header />
			<View style={styles.flat}>
				<FlatList
					styles={styles.flat2}
					data={receitas}
					keyExtractor={(item) => String(item.id)}
					renderItem={({ item }) => <Receitas data={item} />}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
    flat:{
        paddingBottom: "40%"
    }
});

export default App;
