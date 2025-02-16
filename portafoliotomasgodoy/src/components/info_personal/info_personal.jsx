import { Descripcion } from '../descripcion/descripcion'
import './info_personal.css'

export function InfoPersonal() {

    return (
        <section className="sobremicontainer">

            <div className="sobremifotocontainer">
                <img src="./imgs/yo.png" alt="Tomás Godoy" />
            </div>

            <div className="sobremitextocontainer">
                <h1>Tomás Godoy</h1>
                <p>Fecha de nacimiento: 01/02/2000</p>
                <span>País de origen: <img src="./imgs/argentina-flag.webp" alt="Argentina" />Argentina</span>
                <span>País de residencia: <img src="./imgs/argentina-flag.webp" alt="Argentina" />Argentina</span>
                <p>Tel: +549-0341-2006991</p>
                <span>Email: tomas.godoy.litio@hotmail.com</span>
            </div>

            <Descripcion />

        </section>
    )
}