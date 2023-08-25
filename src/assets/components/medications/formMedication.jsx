import React, { useState, useEffect } from 'react';
import { Button, TextField, MenuItem, Box } from '@mui/material';
import { saveData } from '../../global/functions';
import { FormContainer, FormItens } from  '../../global/formStyles';
import { AlertSuccess } from '../../global/alert';

function FormMedication() {
  
  const [reset, setReset] = useState(false);
  const [success, setSuccess] = useState(false)

  const fieldInfo = [
    {
      label: "Medicamento",
      type: "text",
      name: "medicationName",
      required: true,
      stateKey: "medicationName",
    },
    {
      label: "Nome do Laboratório",
      type: "text",
      name: "labName",
      required: true,
      stateKey: "labName",
    },
    {
      label: "Dosagem",
      type: "text",
      name: "dosage",
      required: true,
      stateKey: "dosage",
    },
    {
      label: "Descrição",
      placeholder: "Descrição",
      name: "description",
      multiline: true,
      rows: 5,
      stateKey: "description",
    },
    {
      label: "Preço Unitário",
      type: "number",
      name: "unitPrice",
      required: true,
      stateKey: "unitPrice",
    },
  ];

  const closeModal = () => {
    setSuccess(false);
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        closeModal();
      }, 3000); 

      return () => {
        clearTimeout(timer);
      };
    }
  }, [success]);
  const defaultValue= "common"
  
  const medicationType = [
    {value: "controlled",
    label: "Medicamento Controlado"},
    {value: "common",
    label: "Medicamento Comum"},
  ]
  const initialFormData = {
    medicationName: '',
    labName: '',
    dosage: '',
    description: '',
    unitPrice:'',
    medType: defaultValue,
  }
  const [formData, setFormData] = useState(initialFormData);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    saveData("medication", formData);
    handleReset()
    setSuccess(true)
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
  const handleSelectChange = (event) => {
    const value  = event.target;
    setFormData((prevData) => ({
      ...prevData,
      medType: value,
    }));
  };

  useEffect(() => {
    if (formData == initialFormData){
        setReset(!reset)
    }
  }, [reset]);

  return (
    <>
    <form onSubmit={handleSubmit}>
      <FormContainer>
        {fieldInfo.map(({name, label, type, stateKey, required, multiline, rows}) =>{
            return(
              <FormItens>
                <TextField
                  key={name}
                  label={label}
                  type={type}
                  name={name}
                  value={formData[stateKey]}
                  required={required}
                  multiline={multiline}
                  rows={rows}
                  onChange={(event) => handleInputChange(event)}
                />
              </FormItens>
            )
        })}
        <FormItens>
          <TextField
            id="outlined-select"
            select
            label="Tipo"
            defaultValue={defaultValue}
            helperText="Selecione o tipo de medicamento"
            required
            name='medType'
            onChange={handleSelectChange}
          >
            {medicationType.map((option) => (
              <MenuItem 
                name="medType" 
                key={option.value} 
                value={option.value}
                >
                {option.label}
                
              </MenuItem>
            ))}
          </TextField>
        </FormItens>
        <Box sx={{display: "flex", justifyContent: "space-around"  }}>
              <FormItens>
                  <Button  type="submit" variant="contained">Cadastrar</Button>
              </FormItens>
              <FormItens>
                <Button onClick={handleReset} variant="contained" color="error">Limpar</Button>
              </FormItens>
        </Box>
        <AlertSuccess closeModal={closeModal} success={success} title={"Sucesso"} description={"Medicamento cadastrado"}/>
      </FormContainer>
    </form>
    </>
  );
  }

export { FormMedication };

