import { InfoPersonal } from '../../components/info_personal/info_personal'
import ProyectoCard from '../../components/proyectocard/proyectocard'
import { Tecnologias } from '../../components/tecnologias/tecnologias'
import './home.css'

export function HomePage() {

    return (
        <>
            <InfoPersonal />
            <Tecnologias />
            <ProyectoCard />
        </>
    )
}