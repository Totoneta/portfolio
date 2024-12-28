import './tecnologias.css'
import { tecnologias } from './../data/tecnologias.js'

export function Tecnologias() {


    return (
        <div className="sobremitecnologiascontainer">
            <div className="sobremitecnologiassubcontainer">
                {
                    tecnologias.map((e) => {
                        return (
                            <div key={e.id} className="sobremitecnologia">
                                <img src={e.url} alt={e.nombre} />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}