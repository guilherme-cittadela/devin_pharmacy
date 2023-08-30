import { Routes, Route } from "react-router-dom"
import { ListMedication } from "../assets/pages/listMedication"
import { RegisterMedication } from "../assets/pages/registerMedication"
import { MapPage } from "../assets/pages/map"
import { RegisterPharmacy } from "../assets/pages/registerPharmacy"
function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/medications" element={<ListMedication />}/>
      <Route path="/" element={<MapPage/>}/>
      <Route path="/regmed" element={<RegisterMedication/>}/>
      <Route path="/regpharm" element={<RegisterPharmacy/>}/>
    </Routes>
  )
}
export { PrivateRoutes }
