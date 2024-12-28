import { useState } from 'react';
import './modooscuroyclaro.css'

export default function ModoOscuroYClaro() {

    let [modoclaro, setModoClaro] = useState(false)

    const toggleMode = () => {
        setModoClaro(!modoclaro)
        document.body.classList.toggle('modoclaro');
    };

    return (
        <aside className='modooscuroyclarocontainer'>
            <img src="/svg/moon.svg" alt="Modo Oscuro" title='Modo Oscuro' />
            <div className="modooscuroyclarocontainerbolita"
                style={{
                    justifyContent: modoclaro ? 'end' : 'start'
                }}
            
            >
                <div className="modooscuroyclarobolita"
                    onClick={toggleMode}
                ></div>
            </div>
            <img src="/svg/sun.svg" alt="Modo Claro" title='Modo Claro' />
        </aside>
    )
} 