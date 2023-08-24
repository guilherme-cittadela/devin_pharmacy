import { FormMedication } from "./assets/components/medications/formMedication"
import { ListMedication } from "./assets/pages/listMedication"
import { Login } from "./assets/pages/login"
import { MapPage } from "./assets/pages/map"
import { RegisterMedication } from "./assets/pages/registerMedication"
import { RegisterPharmacy } from "./assets/pages/registerPharmacy"
function App() {

  return (
    <>
      <RegisterPharmacy/>
      <MapPage/>
    </>
  )
}

export default App
