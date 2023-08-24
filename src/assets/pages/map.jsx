import { useState } from "react";
import { MapView } from "../components/map/map";
import { getData } from "../global/functions";



function MapPage() {
    /*const [dataPharm, setDataPharm] = useState()*/
    const dataPharmacy = getData("pharmacy");
    console.log(dataPharmacy)
    return ( 
        <>
            <MapView data={dataPharmacy}/>
        </>
     );
}


export { MapPage };