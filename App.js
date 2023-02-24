// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import Routes from './src/routes/routes';

// export default function App(){
//     return(
//         <NavigationContainer>
//             <Routes/>
//         </NavigationContainer>
//     );
// }


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { receitas } from './src/receita';
import api from './src/services/api';
import Receitas from './src/Receitas';
import Header from './src/Header/header';



function App() {


    return (
        <View style={StyleSheet.container}>
            <Header />
            <FlatList data={receitas}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => <Receitas data={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    loading: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
});

export default App;