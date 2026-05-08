import { useEffect, useState } from "react"
export default function Usuarios(){
    const [cont, setCont] = useState(0)

    const aumenta = () => {
        setCont(cont + 1)
    }

    const dimuir = () => {
        setCont(cont - 1)
    }

    useEffect(() => {
        document.title = `count: ${cont}`
    }, [cont])

  useEffect(() => {
    if (cont > 10  )alert ("contador passou de 10")
    if (cont === -10)alert ("contador chegou a -10")
    }, [cont])

    return (
        <div>
            <h1>USUARIOS</h1>
            {cont}
            <button onClick={() => aumenta()}>aumenta</button>
            <button onClick={() => dimuir()}>dimuir</button>
        </div>
    )
}