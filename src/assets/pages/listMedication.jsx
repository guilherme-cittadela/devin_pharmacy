import { CardMedication } from "../components/medications/cardMedication";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react';
import { CardContainer } from "../components/medications/cardContainer";


function ListMedication() {
    const [filtredMedications, setFiltredMedications] = useState([])
    const [searchMedication, setSearchMedication] = useState('')
    

    
    const medicationList = [
        {
          id: 1,
          name: "Paracetamol",
          laboratory: "Generic Pharma",
          dosage: "500mg",
          description: "Alivia a dor e a febre.",
          price: 10.5,
          type: "Comum",
        },
        {
          id: 2,
          name: "Omeprazol",
          laboratory: "Mega Labs",
          dosage: "20mg",
          description: "Trata problemas de refluxo ácido.",
          price: 15.0,
          type: "Controlado",
        },
        {
          id: 3,
          name: "Ibuprofeno",
          laboratory: "MediCorp",
          dosage: "400mg",
          description: "Anti-inflamatório e analgésico.",
          price: 8.75,
          type: "Comum",
        },
        {
          id: 4,
          name: "Loratadina",
          laboratory: "HealthPlus",
          dosage: "10mg",
          description: "Antialérgico de longa duração.",
          price: 12.0,
          type: "Comum",
        },
        {
          id: 5,
          name: "Rivotril",
          laboratory: "PharmaLife",
          dosage: "2mg",
          description: "Trata ansiedade e convulsões.",
          price: 25.5,
          type: "Controlado",
        },
        {
          id: 6,
          name: "Dipirona",
          laboratory: "MediCorp",
          dosage: "500mg",
          description: "Analgésico e antitérmico.",
          price: 6.0,
          type: "Comum",
        },
        {
          id: 7,
          name: "Captopril",
          laboratory: "HeartCare",
          dosage: "25mg",
          description: "Controla a pressão arterial.",
          price: 9.9,
          type: "Controlado",
        },
        {
          id: 8,
          name: "Aspirina",
          laboratory: "Generic Pharma",
          dosage: "100mg",
          description: "Anti-inflamatório não esteroidal.",
          price: 7.25,
          type: "Comum",
        },
      ];
    useEffect(()=>{
        setFiltredMedications(searchFilter(medicationList, searchMedication))
        console.log(filtredMedications)
    },[searchMedication])

    if(length(filtredMedications) === 0) return (
        <>
        <Alert severity="warning">
         <AlertTitle>Warning</AlertTitle>
            This is a warning alert — <strong>check it out!</strong>
        </Alert>
      </>)
    return ( 
        
        <>
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
            
            <InputBase
                onChange={(event) =>{
                    setSearchMedication(event.target.value)
                  }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Google Maps"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>

            </Paper>
            <CardContainer>
            {filtredMedications.map(({id, name, description, laboratory, dosage, price, type})=>{
                return(
                    <CardMedication 
                    key={id}
                    id={id}
                    name={name} 
                    description={description} 
                    laboratory={laboratory}
                    dosage={dosage}
                    price={price}
                    type={type}
                    />
                    )
                })}
                </CardContainer>
        </>
    );
}

export { ListMedication };

const searchFilter = (list, term) => {
    console.log(list, term)
    return list.filter((item) => {
      return new RegExp(term, "ig").test(item.name);
    });
  };