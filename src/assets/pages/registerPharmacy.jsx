import { Box } from "@mui/material";
import { FormRegister } from "../components/pharmacy/formRegister.jsx"
import { FormContainer } from '../components/pharmacy/formStyles.js'; 
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