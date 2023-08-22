import { FormContainer } from '../global/formStyles.js'; 
import { FormMedication } from "../components/medications/formMedication.jsx";

function RegisterMedication() {
    return ( 
        <>
            <FormContainer>
                <FormMedication/>
            </FormContainer>

        </>
     );
}

export { RegisterMedication };