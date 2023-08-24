import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapCard from './mapCard';



function MapView({data}) {
    return ( 
        <>
        <MapContainer style={{width: "100%", height:"100vh"}}  center={[-27.693814998118743,-48.50166763843848]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {data.map(({tradeName, email, street, number, neighborhood, city, state, phone, latitude, longitude}, idx) => {
              console.log(idx)
              return(
                <>
                  <Marker  position={[latitude, longitude]}>
                    <Popup>
                      <MapCard
                      id={idx}
                      title={tradeName}
                      email={email}
                      street={street}
                      number={number}
                      neighborhood={neighborhood}
                      city={city}
                      state={state}
                      phone={phone}
                      />
                    </Popup>
                  </Marker>
                </>
              )
            })}
        </MapContainer>
        </>
     );
}

export { MapView };

