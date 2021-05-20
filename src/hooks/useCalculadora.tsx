import { useRef, useState } from 'react'

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
    
        const [numero, setNumero] = useState('0');
        const [numeroAnterior, setNumeroAnterior] = useState('0');
    
        const ultimaOperacion = useRef<Operadores>()
    
        const limpiar = () => {
            setNumero('0')
            setNumeroAnterior('0')
        }
    
        const selectNumber = (numeroTexto: string) => {
            //Verificar si ya hay decimal
            if(numero.includes('.') && numeroTexto === '.') return;
    
            if(numero.startsWith('0') || numero.startsWith('-0')){
                //Punto decimal
                if(numeroTexto === '.'){
                    setNumero(numero + numeroTexto)
                    //Evaluar si es otro 0 y hay un punto
                }else if(numeroTexto === '0' && numero.includes('.')){
                    setNumero(numero + numeroTexto)
                    //Evaluar si es diferente de 0 y no tiene un punto
                }else if (numeroTexto !== '0' && !numero.includes('.')){
                    setNumero(numeroTexto)
                    //Evitar 00000.0
                }else if ( numeroTexto === '0' && !numero.includes('.')){
                    setNumero(numero)
                    //Resto
                }else{
                    setNumero( numero + numeroTexto)
                }
            }else{
                setNumero( numero + numeroTexto)
            }
        }
    
        const masMenos = () => {
            if (numero.includes('-')){
                setNumero(numero.replace('-', ''))
            }else{
                setNumero('-' + numero)
            }
        }
    
        const del = () => {
            let negativo = ''
            let numeroTemporal = numero;
            if(numero.includes('-')){
                negativo = '-'
                numeroTemporal = numero.substr(1)
            }
            if(numeroTemporal.length > 1){
                setNumero(negativo + numeroTemporal.slice(0, -1))
            }else{
                setNumero('0')
            }
        }
    
        const cambiarNumPorAnterior = () => {
            if(numero.endsWith('.')){
                setNumeroAnterior(numero.slice(0, -1))
            }else{
                setNumeroAnterior(numero)
                setNumero('0')
            }
        }
    
        const dividir = () => {
            cambiarNumPorAnterior()
            ultimaOperacion.current = Operadores.dividir;
        }
        const multiplicar = () => {
            cambiarNumPorAnterior()
            ultimaOperacion.current = Operadores.multiplicar;
        }
        const restar = () => {
            cambiarNumPorAnterior()
            ultimaOperacion.current = Operadores.restar;
        }
        const sumar = () => {
            cambiarNumPorAnterior()
            ultimaOperacion.current = Operadores.sumar;
        }
    
        const calcular = () => {
            const num1 = Number(numero);
            const num2 = Number(numeroAnterior);
            //Evitar NaN al presionar varias veces el =
            if( num1 === 0 && num2 === 0) {
                return setNumero('0');
            } 
            switch (ultimaOperacion.current) {
                case Operadores.sumar:
                    setNumero(`${num1 + num2}`)
                    break;
    
                case Operadores.restar:
                    setNumero(`${num2 - num1}`)
                    break;
    
                case Operadores.multiplicar:
                    setNumero(`${num1 * num2}`)
                    break;
    
                case Operadores.dividir:
                    setNumero(`${num2 / num1}`)
                    break;
            }
            setNumeroAnterior('0')
        }
    return {
        numeroAnterior,
        numero,
        limpiar,
        masMenos,
        del,
        dividir,
        selectNumber,
        multiplicar,
        restar,
        sumar,
        calcular

    }
}
