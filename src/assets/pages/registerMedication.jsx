import { Box } from "@mui/material";
import { FormContainer } from '../components/pharmacy/formStyles.js'; 
import { FormMedication } from "../components/medications/formMedication.jsx";

function RegisterMedication() {
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
                <FormMedication/>
            </FormContainer>
        </Box>

        </>
     );
}

export { RegisterMedication };