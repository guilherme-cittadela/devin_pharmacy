import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapCard from './mapCard';
import { MapStyle } from './mapStyle';
import { AlertNoData } from '../alert/alertNoData';



function MapView({data}) {
  if (data === null) {
    return(
      <MapStyle>

      <AlertNoData
        page="Cadastro de farmácias"
        link="/regpharm"
        />
      </MapStyle>
    )
  }
    return ( 
        <>
        <MapStyle>

        <h1>Farmácias cadastradas</h1>
        <MapContainer style={{width: "100%", height:"100vh"}}  center={[-27.693814998118743,-48.50166763843848]} zoom={10} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

            {data.map(({tradeName, email, street, number, neighborhood, city, state, phone, latitude, longitude}, idx) => {
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
        </MapStyle>
        </>
     );
}

export { MapView };

