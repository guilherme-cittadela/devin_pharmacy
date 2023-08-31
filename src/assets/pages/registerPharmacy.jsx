import { FormRegister } from "../components/pharmacy/formRegister.jsx"
import { Header } from "../components/header/header.jsx";
import { Footer } from "../components/footer/footer.jsx";

function RegisterPharmacy() {
    return ( 
        <>
            <Header/>
            <FormRegister/>
            <Footer/>
        </>
     );
}

export  {RegisterPharmacy};