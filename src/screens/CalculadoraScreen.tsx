import React from 'react';
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';
import { style } from '../theme/appTheme';

export const CalculadoraScreen = () => {

   const{numeroAnterior, numero, limpiar, masMenos, del, dividir, selectNumber, multiplicar, restar, sumar, calcular} = useCalculadora()
    
    return (
        <View style={ style.calculadoraContainer}>
            {/* Para que el numero pequeño no se vea si es 0 */}
            {
                (numeroAnterior !== '0') && <Text style={ style.resultadoPequeno }>{numeroAnterior}</Text>
            }
            <Text style={ style.resultado } numberOfLines={1} adjustsFontSizeToFit>{numero}</Text>

            <View style={ style.fila }>
                <BotonCalc texto='C' color='#9B9B9B' action={limpiar}/>
                <BotonCalc texto='+/-' color='#9B9B9B' action={masMenos}/>
                <BotonCalc texto='del' color='#9B9B9B' action={del}/>
                <BotonCalc texto='/' color='#FF9427' action={dividir}/>
           </View>
           <View style={ style.fila }>
                <BotonCalc texto='7' action={selectNumber}/>
                <BotonCalc texto='8' action={selectNumber}/>
                <BotonCalc texto='9' action={selectNumber}/>
                <BotonCalc texto='x' color='#FF9427' action={multiplicar}/>
           </View>
           <View style={ style.fila }>
                <BotonCalc texto='4' action={selectNumber}/>
                <BotonCalc texto='5' action={selectNumber}/>
                <BotonCalc texto='6' action={selectNumber}/>
                <BotonCalc texto='-' color='#FF9427' action={restar}/>
           </View>
           <View style={ style.fila }>
                <BotonCalc texto='1' action={selectNumber}/>
                <BotonCalc texto='2' action={selectNumber}/>
                <BotonCalc texto='3' action={selectNumber}/>
                <BotonCalc texto='+' color='#FF9427' action={sumar}/>
           </View>
           <View style={ style.fila }>
                <BotonCalc texto='0' ancho={true} action={selectNumber}/>
                <BotonCalc texto='.' action={selectNumber}/>
                <BotonCalc texto='=' color='#FF9427' action={calcular}/>
           </View>
        
        </View>
    )
}
