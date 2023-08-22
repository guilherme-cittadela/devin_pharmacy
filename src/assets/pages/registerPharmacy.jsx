import { Box } from "@mui/material";
import { FormRegister } from "../components/pharmacy/formRegister.jsx"
import { FormContainer } from '../global/formStyles.js'; 

function RegisterPharmacy() {
    return ( 
        <>
        <Box

        >
            <FormContainer>
                <FormRegister/>
            </FormContainer>
        </Box>

        </>
     );
}

export  {RegisterPharmacy};