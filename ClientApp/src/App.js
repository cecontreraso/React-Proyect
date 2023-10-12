import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import NavMenu from './Componentes/NavMenu';
import Tarjeta from './Componentes/Tarjeta';

const App = () => {

    const [numero, setNumero] = useState(0)

    let modeloPersona = {
        Nombre: "Cesar",
        Correo: "cesar@gmail.com"

    }

    const[persona,setPersona] = useState(modeloPersona)


    return (
        <div className="container-fluid">
            
            <NavMenu />

            <div className="row justify-content-sm-center">
                <div className="col-sm-4">
                    <Tarjeta
                        titulo="Bienvenido a la intranet"
                        parrafo="Texto distinto para el parrafo"
                        textoboton="suscribete" /> Consumir un componente


                    <Tarjeta />

                </div>
                
            </div>
            
        </div>
    )
}
export default App;