import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import InputMask from 'react-input-mask';
import {Box} from '@mui/material';

function FormRegister() {
    const initialFormData = {
      companyName: '',
      cnpj: '',
      tradeName: '',
      email: '',
      phone: '',
      mobile: '',
      zipCode: '',
      street: '',
      number: '',
      neighborhood: '',
      city: '',
      state: '',
      latitude: '',
      longitude: '',
    };
    
    const [formData, setFormData] = useState(initialFormData);
    const [disabled, setDisabled] = useState(true);
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
  
    const handleZipCodeChange = (event) => {
      const { value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        zipCode: value,
      }));
      fetchAddressByZipCode(value);
    };
  
    const fetchAddressByZipCode = async (zipCode) => {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`);
        if (response.ok) {
          const data = await response.json();
          setFormData((prevData) => ({
            ...prevData,
            street: data.logradouro || '',
            neighborhood: data.bairro || '',
            city: data.localidade || '',
            state: data.uf || '',
          }));
        }
      } catch (error) {
        console.error('Error fetching address:', error);
      }
    };

    useEffect(() => {
        if (formData == initialFormData){
            setReset(!reset)
        }
      }, [reset]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Razão Social"
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          required
          onChange={handleInputChange}
        />
        <InputMask
          mask="99.999.999/9999-99"
          maskChar=""
          value={formData.cnpj}
          onChange={handleInputChange}
        >
          {(inputProps) => (
            <TextField
              {...inputProps}
              label="CNPJ"
              type="text"
              id="cnpj"
              name="cnpj"
              required
            />
          )}
        </InputMask>
        <TextField
          label="Nome Fantasia"
          type="text"
          id="tradeName"
          name="tradeName"
          value={formData.tradeName}
          required
          onChange={handleInputChange}
        />
        <TextField
          label="E-mail"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          required
          onChange={handleInputChange}
        />
        <InputMask
          mask="(99) 9999-9999"
          maskChar=""
          value={formData.phone}
          onChange={handleInputChange}
        >
          {(inputProps) => (
            <TextField
              {...inputProps}
              label="Telefone"
              type="tel"
              id="phone"
              name="phone"
              required
            />
          )}
        </InputMask>
        <InputMask
          mask="(99) 99999-9999"
          maskChar=""
          value={formData.mobile}
          onChange={handleInputChange}
        >
          {(inputProps) => (
            <TextField
              {...inputProps}
              label="Celular"
              type="tel"
              id="mobile"
              name="mobile"
            />
          )}
        </InputMask>
        <InputMask
          mask="99999-999"
          maskChar=""
          value={formData.zipCode}
          onChange={handleZipCodeChange}
        >
          {(inputProps) => (
            <TextField
              {...inputProps}
              label="CEP"
              type="text"
              id="zipCode"
              name="zipCode"
              required
            />
          )}
        </InputMask>
        <TextField
          type="text"
          id="neighborhood"
          name="neighborhood"
          readOnly
          value={formData.neighborhood}
          onChange={handleInputChange}
          disabled = {disabled}
          />
        <TextField
          type="text"
          id="city"
          name="city"
          readOnly
          value={formData.city}
          onChange={handleInputChange}
          disabled = {disabled}
          />
        <TextField
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
          disabled = {disabled}
          />
        <TextField
          type="text"
          id="street"
          name="street"
          readOnly
          disabled = {disabled}
          value={formData.street}
          onChange={handleInputChange}
          />
        <TextField
          label="Número"
          type="number"
          id="number"
          name="number"
          readOnly
          value={formData.number}
          onChange={handleInputChange}
          />
        <InputMask
          mask="99999999"
          maskChar=""
          value={formData.latitude}
          onChange={handleInputChange}
          >
          {(inputProps) => (
            <TextField
              {...inputProps}
              label="Latitude"
              type="text"
              id="latitude"
              name="latitude"
              required
            />
          )}
        </InputMask>
        <InputMask
          mask="999999999"
          maskChar=""
          value={formData.longitude}
          onChange={handleInputChange}
        >
          {(inputProps) => (
            <TextField
              {...inputProps}
              label="Longitude"
              type="text"
              id="longitude"
              name="longitude"
              required
            />
          )}
        </InputMask>
        <Box sx={{display: "flex", justifyContent: "space-around"  }}>
            <Button type="submit" variant="contained">Cadastrar</Button>
            <Button onClick={handleReset} variant="contained" color="error">Limpar</Button>
        </Box>
      </form>
    </>
  );
}

export { FormRegister };
