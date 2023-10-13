import NavMenu from "../Componentes/NavMenu"
import Lottie from "react-lottie"
import animationData from "../lotties/order_lotties.json"



const Intranet = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            <NavMenu />
            <div>
                <div className="row"> {/*Primera fila*/}
                    <div className="col-sm-4 col-lg-2">
                        <h1>fila 1</h1>
                    </div>
                    <div className="col-sm-4 col-lg-2">
                        <h1>fila 1</h1>
                    </div>
                    <div className="col-sm-4 col-lg-2">
                        <h1>fila 1</h1>
                    </div>
                    <div className="col-sm-4 col-lg-2">
                        <h1>fila 1</h1>
                    </div>
                    <div className="col-sm-4 col-lg-2">
                        <h1>fila 1</h1>
                    </div>
                    <div className="col-sm-4 col-lg-2">
                        <h1>fila 1</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-lg-2">
                        <h1>fila 2</h1>
                    </div>
                    <div className="col-sm-4 col-lg-2">
                        <Lottie
                            options={defaultOptions}
                            height={150}
                            width={150}
                        />
                    </div>
                    <div className="col-sm-4 col-lg-2">
                        <h1>fila 2</h1>
                    </div>
                    <div className="col-sm-4 col-lg-2">
                        <h1>fila 2</h1>
                    </div>
                    <div className="col-sm-4 col-lg-2">
                        <h1>fila 2</h1>
                    </div>
                    <div className="col-sm-4 col-lg-2">
                        <h1>fila 2</h1>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Intranet

