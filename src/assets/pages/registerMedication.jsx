import { FormContainer } from '../global/styles/formStyles.js'; 
import { FormMedication } from "../components/medications/formMedication.jsx";
import { Header } from '../components/header/header.jsx';

function RegisterMedication() {
    return ( 
        <>  
            <Header/>
            <FormContainer>
                <FormMedication/>
            </FormContainer>

        </>
     );
}

export { RegisterMedication };