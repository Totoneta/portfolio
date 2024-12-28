import { Link } from 'react-router-dom'
import './proyectocard.css'
import { proyectos } from '../data/proyectos'
import { tecnologias } from '../data/tecnologias'

export default function ProyectoCard() {

    return (
        <section className='proyectocardcontainer'>
            {
                proyectos.map((e) => {

                    return (
                        <div key={e.id} className="proyectocardsubcontainer">
                            <img src={e.imgpath} alt={e.titulo} />
                            <div className="proyectocardcontainertexto">
                                <h3>{e.titulo}</h3>
                                <Link to={e.enalceaproyecto} target='_blank'>Visitar Proyecto</Link>
                            </div>
                            <div className="proyectocardcontainertecnologias">
                            {
                                    e.tech.map((ele) => {
                                        return tecnologias.map((tecnologia) => {
                                           if (ele === tecnologia.nombre) {
                                                return (
                                                    <img key={tecnologia.id} src={tecnologia.url} alt={tecnologia.nombre} />
                                                )
                                           }
                                           return null;
                                        })
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}