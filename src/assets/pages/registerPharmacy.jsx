import { Box } from "@mui/material";
import { FormRegister } from "../components/pharmacy/formRegister.jsx"
import { FormContainer } from '../global/formStyles.js'; 

function RegisterPharmacy() {
    return ( 
        <>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '100%' },
            }}
            autoComplete="off"
        >
            <FormContainer>
                <FormRegister/>
            </FormContainer>
        </Box>

        </>
     );
}

export  {RegisterPharmacy};