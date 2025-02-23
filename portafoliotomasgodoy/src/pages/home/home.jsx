import { InfoPersonal } from '../../components/info_personal/info_personal'
import MisEstudiosContainer from '../../components/misestudios/misestudioscontainer'
import ProyectoCard from '../../components/proyectocard/proyectocard'
import ProyectosEnConjunto from '../../components/proyectosenconjunto/proyectosenconjunto'
import { Tecnologias } from '../../components/tecnologias/tecnologias'
import './home.css'

export function HomePage() {

    return (
        <>
            <ProyectoCard />
            <ProyectosEnConjunto />
            <MisEstudiosContainer />
            <Tecnologias />
            <InfoPersonal />
        </>
    )
}