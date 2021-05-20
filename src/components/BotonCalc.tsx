import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { style } from '../theme/appTheme';

interface Props {
    texto: string;
    color?: string;
    ancho?: boolean;
    action: ( numeroTexto: string ) => void;
}

export const BotonCalc = ( {texto, color = '#2D2D2D', ancho = false, action} : Props) => {
    return (
        <TouchableOpacity onPress={() => action(texto)}>
            <View style={{...style.boton, backgroundColor: color, width: (ancho) ? 180 : 80}}>
                <Text style={{...style.botonTexto, color: (color === '#9B9B9B') ? 'black' : 'white'}}>{ texto }</Text>
            </View>
        </TouchableOpacity>
    )
}
