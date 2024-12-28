import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/home/home'
import ModoOscuroYClaro from '../components/modooscuroyclaro/modooscuroyclaro'

export function Enrutamiento() {

  return (
    <BrowserRouter>
      <ModoOscuroYClaro />
      <Routes>
        <Route path='/' Component={HomePage} />
      </Routes>

    </BrowserRouter>
  )
}
