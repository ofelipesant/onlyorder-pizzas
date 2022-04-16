import {FiGithub, FiLinkedin} from "react-icons/fi"
import './rodape.sass'

export default function Rodape(){
    return(
        <footer className="rodape">
            <div className="infos-rodape">
                <span>Design e desenvolvimento por <strong>Felipe dos Santos</strong></span>
                <div className="icons">
                    <a href="https://github.com/ofelipesant" target="_blank" rel="external" className="icon-footer"><FiGithub size={20}/></a>
                    <a href="https://www.linkedin.com/in/felipe-dos-santos-1869a0221/" target="_blank" rel="external" className="icon-footer"><FiLinkedin size={20}/></a>
                </div>
            </div>

            <p>Acesse o <a href="https://github.com/ofelipesant/onlyorder-pizzas" target="_blank" rel="external">repositório do projeto</a></p>
        </footer>
    )
}