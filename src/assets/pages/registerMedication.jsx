import { FormMedication } from "../components/medications/formMedication.jsx";
import { Header } from '../components/header/header.jsx';
import { Footer } from '../components/footer/footer.jsx';

function RegisterMedication() {
    return ( 
        <>  
            <Header/>
            <FormMedication/>
            <Footer/>
        </>
     );
}

export { RegisterMedication };