﻿
const Tarjeta = (props) => {
    return (
        <div className="card text-center bg-dark mt-5">
            <div className="card-body">
                <h1 className="card-title text-info">{props.titulo}</h1>
                <p className="card-text text-light">{props.parrafo}</p>
                <a href="/Solcom" className="btn btn-danger">{props.textoboton}</a>
            </div>
        </div>
    )
}

export default Tarjeta