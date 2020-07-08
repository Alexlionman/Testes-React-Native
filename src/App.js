import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'

import Familia from './components/relacao/Familia'
/* import ParImpar from './components/ParImpar' */
/* import ContadorV2 from './components/contador/ContadorV2' */
/* import Contador from './components/Contador' */
/* import Botao from './components/Botao'
import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio' */
/* import X, { Comp1, Comp2 } from './components/Multi'
import Primeiro from './components/Primeiro' */
/* import Titulo from './components/Titulo' */
/* import Pai from './components/direta/Pai' */




export default () => (
    <SafeAreaView style={style.App}>
        <Familia></Familia>
        {/*   <ParImpar num={3}></ParImpar> */}
        {/*  <ContadorV2></ContadorV2> */}
        {/* /* <Contador inicial={100} passo={13} />
        <Contador /> */ }
        {/*  <Botao></Botao> */}
        {/* <MinMax min={3} max={20}></MinMax> */}
        {/*  <Titulo principal="Cadastro" secundario="Tela de cadastro"></Titulo> */}
        {/* <Aleatorio min={1} max={}></Aleatorio> */}
        {/* <X></X>
        <Comp1></Comp1>
        <Comp2></Comp2>
        <Primeiro /> */}
    </SafeAreaView>
)
const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20  //bordas da tela

    }
})

