import { Link } from "react-router-dom";

export default function Cabecalho(){
    return(
        <header className="cabecalho">
            <div className="logo-container">
                <img src="#" alt="logo"/>
            </div>

            <div className="navigation">

                    <Link to="/">
                        <nav className="menu">Home</nav>
                    </Link>
                
                    <Link to="/pedidos">
                        <nav className="menu">Pedidos</nav>
                    </Link>

            </div>
        </header>
    )
}