import React, { useState, useEffect } from 'react';
import { Button, TextField, MenuItem, Box, FormControl } from '@mui/material';

function FormMedication() {
  const initialFormData = {
    medicationName: '',
    labName: '',
    dosage: '',
    description: '',
    unitPrice: 0,
    medType: '',
  }

  const medicationType = [
    {value: "controlled",
    label: "Medicamento Controlado"},
    {value: "common",
    label: "Medicamento Comum"},
  ]
  const [formData, setFormData] = useState(initialFormData);
  const [reset, setReset] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (event)=>{
    let value = event.target.value
    setFormData((prevData) => ({
      ...prevData,
      [medType]: value,
    }));
    console.log(formData)
  }
  useEffect(() => {
    if (formData == initialFormData){
        setReset(!reset)
    }
  }, [reset]);

  return (
    
       <form >
        <TextField
          label="Nome"
          type="text"
          name="medicationName"
          value={formData.medicationName}
          required
          onChange={handleInputChange}
        />
        <TextField
          label="Nome do Laboratório"
          type="text"
          name="labName"
          value={formData.labName}
          required
          onChange={handleInputChange}
        />
        <TextField
          label="Dosagem"
          type="text"
          name="dosage"
          value={formData.dosage}
          required
          onChange={handleInputChange}
        />
        <TextField
          aria-label="Descrição"
          placeholder="Descrição"
          name="description"
          value={formData.description}
          id="outlined-multiline-static"  
          multiline      
          rows={5}  
          onChange={handleInputChange}
        />
        <TextField
          label="Preço Unitário"
          type="number"
          name="unitPrice"
          value={formData.unitPrice}
          required
          onChange={handleInputChange}
        />
          
          <TextField
            id="outlined-select"
            select
            label="Tipo"
            defaultValue="Tipo"
            helperText="Selecione o tipo de medicamento"
            required
            onChange={handleInputChange}
          >
            {medicationType.map((option) => (
            <MenuItem name="medType" key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
        <Box sx={{display: "flex", justifyContent: "space-around"  }}>
            <Button onSubmit={handleSubmit} type="submit" variant="contained">Cadastrar</Button>
            <Button onClick={handleReset} variant="contained" color="error">Limpar</Button>
        </Box>

      </form>
  );
}

export { FormMedication };
