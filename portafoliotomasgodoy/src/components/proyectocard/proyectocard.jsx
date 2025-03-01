import { Link } from 'react-router-dom'
import './proyectocard.css'
import { proyectos } from '../../data/proyectos'
import { tecnologias } from '../../data/tecnologias'

export default function ProyectoCard() {

    return (
        <section className='proyectocardcontainer' id='proyectocardcontainer'>
            {
                proyectos.map((e) => {

                    return (
                        <div key={e.id} className="proyectocardsubcontainer">
                            <img src={e.imgpath} alt={e.titulo} />
                            <div className="proyectocardcontainertexto">
                                <h3>{e.titulo}</h3>
                                <span>{e.descripcion}</span>
                                <Link to={e.enalceaproyecto} target='_blank'>Visitar Proyecto</Link>
                            </div>
                            <div className="proyectocardcontainertecnologias">
                                {
                                    e.tech.map((ele) => {
                                        return tecnologias.map((tecnologia) => {
                                            if (ele === tecnologia.nombre) {
                                                return (
                                                    <img key={tecnologia.id} src={tecnologia.url} alt={tecnologia.nombre} title={tecnologia.nombre} />
                                                )
                                            }
                                            return null;
                                        })
                                    })
                                }
                            </div>
                            <div className="proyectocardcontainerresponsivo">
                                {
                                    e.responsive ?
                                        <div className="proyectocardcontainerresponsivocontainer">
                                            <img src='/svg/desktop.svg' alt='Desktop' title='Desktop' />
                                            <img src='/svg/phoneipad.svg' alt='Phone & Ipad' title='Phone & Ipad' />
                                        </div>
                                        :
                                        <div className="proyectocardcontainerresponsivocontainer">
                                            <img src='/svg/desktop.svg' alt='Desktop' title='Desktop' />
                                        </div>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}