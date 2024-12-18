import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { MapView } from "../components/map/map";
import { getData } from "../global/functions/functions";



function MapPage() {
    const dataPharmacy = getData("pharmacy");
    return ( 
        <>  
            <Header/>
            <MapView data={dataPharmacy}/>
            <Footer/>
        </>
     );
}


export { MapPage };