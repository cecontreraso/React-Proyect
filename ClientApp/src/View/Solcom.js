import Footer from "../Componentes/Footer"
import NavMenu from "../Componentes/NavMenu"
import 'bootstrap/dist/css/bootstrap.css';

const Solcom = () => {
    return (
        
        <div className= "container-fluid justify-content-sm-center" >
            <NavMenu />
            <div className="text-center">
                <div >
                    <h1 className="">Bienvenido a la Solicitud de Compra</h1>
                </div>
                <div >
                    <div >
                        <div >
                            <h1>Inicio de Sesion</h1>
                        </div>
                        <div style={{ border: "1px solid #000" }}>
                            <h2>Formulario</h2>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Solcom;