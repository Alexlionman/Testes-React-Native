import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default props => (
    //usando fragment com <> </>
    <>
        <Text style={Estilo.txtG}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </>

)

