import { MapView } from "../components/map/map";
import { getData } from "../global/functions";



function MapPage() {
    const dataPharmacy = getData("pharmacy");
    return ( 
        <>
            <MapView data={dataPharmacy}/>
        </>
     );
}


export { MapPage };