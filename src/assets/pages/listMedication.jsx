import { CardMedication } from "../components/medications/cardMedication";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react';
import { CardContainer } from "../components/medications/cardContainer";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { getData } from "../global/functions";


function ListMedication() {
    const [filtredMedications, setFiltredMedications] = useState([])
    const [searchMedication, setSearchMedication] = useState('')
    

    
    const medicationList = getData("medication")
    useEffect(()=>{
        setFiltredMedications(searchFilter(medicationList, searchMedication))
    },[searchMedication])

    return ( 
        
        <>
        <Paper
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            
          <InputBase
              onChange={(event) =>{
                  setSearchMedication(event.target.value)
                }}
              sx={{ ml: 1, flex: 1 }}
              placeholder="Buscar medicamentos"
              inputProps={{ 'aria-label': 'search medication' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
          </IconButton>

        </Paper>
        {filtredMedications.length === 0 ? (
          <Alert severity="info">
            <AlertTitle>Informação</AlertTitle>
            Nenhum dado encontrado
          </Alert>
        ) : (
            <CardContainer>
                {filtredMedications.map(({ medicationName, description, labName, dosage, unitPrice, medType }, idx) => (
                    <CardMedication 
                        key={idx}
                        id={idx}
                        name={medicationName} 
                        description={description} 
                        laboratory={labName}
                        dosage={dosage}
                        price={unitPrice}
                        type={medType}
                    />
                ))}
            </CardContainer>
        )}
        </>
    );
}

export { ListMedication };

const searchFilter = (list, term) => {
    console.log()
    return list.filter((item) => {
      console.log(item)
      return new RegExp(term, "ig").test(item.medicationName);
    });
  };