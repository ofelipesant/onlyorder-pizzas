import { Link } from "react-router-dom";
import './cabecalho.sass'

export default function Cabecalho(){
    return(
        <header className="cabecalho">
            <div className="navigation">

                    <Link to="/" className="link">
                        <nav className="menu">HOME</nav>
                    </Link>
                
                    <Link to="/pedidos" className="link">
                        <nav className="menu">PEDIDOS</nav>
                    </Link>
            </div>

            <div className="logo-container">
                <img src="/images/logo.png" alt="logo" className="logo"/>

            </div>
        </header>
    )
}