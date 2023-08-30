import { Box } from "@mui/material";
import { FormRegister } from "../components/pharmacy/formRegister.jsx"
import { FormContainer } from '../global/styles/formStyles.js'; 
import { Header } from "../components/header/header.jsx";

function RegisterPharmacy() {
    return ( 
        <>
            <Header/>
            <FormRegister/>
        </>
     );
}

export  {RegisterPharmacy};