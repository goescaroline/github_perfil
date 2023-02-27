import { useState, useEffect } from "react"

const Formulario = () => {

    const [materiaA, setValorMateriaA] = useState(0);
    const [materiaB, setValorMateriaB] = useState(0);
    const [materiaC, setValorMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("O componente iniciou")

        return () => {
            console.log("o componente finalizou")
        }
    },[])
    
    useEffect(() => {
        console.log("O estado nome mudou")
    },[nome])



    useEffect(() => {
        console.log("materia A mudou para: " + materiaA)
    },[materiaA, materiaB, materiaC])

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {

            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}, Você foi reprovado</p>
            )
        }
    }
    return (
        <form>
            <ul>
            {[1,2,3,4,5].map(item => (
            
            <li key={item}>{item}</li>
            
            ))}
            </ul>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={evento => setValorMateriaA(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria B" onChange={evento => setValorMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setValorMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario