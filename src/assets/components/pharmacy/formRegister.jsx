import React, { useState, useEffect } from 'react';
import { Button, TextField, Box } from '@mui/material';
import InputMask from 'react-input-mask';
import { validateEmail, saveData } from '../../global/functions/functions';
import { AlertSuccess } from '../alert/alert';
import { FormContainer } from '../../global/styles/formStyles';
import { FormItens } from '../medications/cardContainer';

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
    const [cnpjValid, setCnpjValid] = useState(true);
    const [reset, setReset] = useState(false);
    const [helperTextEmail, setHelperEmail] = useState('');
    const [helperTextCNPJ, setHelperCNPJ] = useState('');
    const [helperTextCEP, setHelperCEP] = useState('');
    const [emailValid, setEmailValid] = useState(true);
    const [cepValid, setCEPValid] = useState(true);
    const [success, setSuccess] = useState(false)


    
    
    const handleSubmit = (event) => {
      event.preventDefault();
      if (compareByCnpj(formData.cnpj)) {
        setCnpjValid(false)
      } else {
        saveData("pharmacy", formData);
        handleReset()
        setCnpjValid(true)
        setSuccess(true)
      }
    
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
    
    const handleEmailChange = (event) => {
      const { value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        email: value,
      }));
      setEmailValid(validateEmail(value));
    }
    
    const handleZipCodeChange = (event) => {
      const { value } = event.target;
    
      setFormData((prevData) => ({
        ...prevData,
        zipCode: value,
      }));
      fetchAddressByZipCode(value);
    };

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
    
    const fetchAddressByZipCode = async (zipCode) => {
      const zipCodeRegex = /^\d{5}-\d{3}$/;
      if (zipCodeRegex.test(zipCode)) {
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
            setCEPValid(true)
          }
        } catch (error) {
          console.error('Error fetching address:', error);
        }
      } else {
        setCEPValid(false)
      }
    };

    useEffect(() => {
        if (formData == initialFormData){
            setReset(!reset)
        }
      }, [reset]);

    useEffect(() => { 
      emailValid? setHelperEmail(""): setHelperEmail("Email Inválido")
      cnpjValid? setHelperCNPJ(""): setHelperCNPJ("CNPJ Inválido")
      cepValid? setHelperCEP(""): setHelperCEP("CEP Inválido")
    },[emailValid, cnpjValid, cepValid])

    const textFieldData = [
      {
        stateKey: "companyName",
        label: "Razão Social",
        type: "text",
        id: "companyName",
        name: "companyName",
        onChange: handleInputChange,
      },
      {
        stateKey: "cnpj",
        label: "CNPJ",
        type: "text",
        id: "cnpj",
        name: "cnpj",
        error: !cnpjValid,
        helperText: helperTextCNPJ,
        
        InputMaskProps: {
          mask: "99.999.999/9999-99",
          maskChar: "",
        },
        onChange: handleInputChange,
      },
      {
        stateKey: "tradeName",
        label: "Nome Fantasia",
        type: "text",
        id: "tradeName",
        name: "tradeName",
        onChange: handleInputChange,
      },
      {
        stateKey: "email",
        label: "E-mail",
        type: "email",
        id: "email",
        name: "email",
        error: !emailValid,
        helperText: helperTextEmail,
        onChange: handleEmailChange,
      },
      {
        stateKey: "phone",
        label: "Telefone",
        type: "tel",
        id: "phone",
        name: "phone",
        
        InputMaskProps: {
          mask: "(99) 99999-9999",
          maskChar: "",
        },
        onChange: handleInputChange,
      },
      {
        stateKey: "mobile",
        label: "Celular",
        type: "tel",
        id: "mobile",
        name: "mobile",
        
        InputMaskProps: {
          mask: "(99) 99999-9999",
          maskChar: "",
        },
        onChange: handleInputChange,
      },
      {
        stateKey: "zipCode",
        label: "CEP",
        type: "text",
        id: "zipCode",
        name: "zipCode",
        error: !cepValid,
        helperText: helperTextCEP,
        
        InputMaskProps: {
          mask: "99999-999",
          maskChar: "",
        },
        onChange: handleZipCodeChange,
      },
      {
        stateKey: "neighborhood",
        label: "Bairro",
        type: "text",
        id: "neighborhood",
        name: "neighborhood",
        onChange: handleInputChange,
      },
      {
        stateKey: "city",
        label: "Cidade",
        type: "text",
        id: "city",
        name: "city",
        onChange: handleInputChange,
      },
      {
        stateKey: "state",
        label: "UF",
        type: "text",
        id: "state",
        name: "state",
        onChange: handleInputChange,
      },
      {
        stateKey: "street",
        label: "Rua",
        type: "text",
        id: "street",
        name: "street",
        onChange: handleInputChange,
      },
      {
        stateKey: "number",
        label: "Número",
        type: "number",
        id: "number",
        name: "number",
        onChange: handleInputChange,
      },
      {
        stateKey: "latitude",
        label: "Latitude",
        type: "text",
        id: "latitude",
        name: "latitude",
        onChange: handleInputChange,
      },
      {
        stateKey: "longitude",
        label: "Longitude",
        type: "text",
        id: "longitude",
        name: "longitude",
        onChange: handleInputChange,
      },
    ];

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormContainer>
        {textFieldData.map((field) => (
        <div key={field.id}>
          {field.InputMaskProps ? (
            <FormItens>
              <InputMask {...field.InputMaskProps} value={formData[field.stateKey]} onChange={field.onChange}>
                {(inputProps) => (
                  <TextField
                  sx={{width: "100%"}}
                  label={field.label}
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  error={field.error}
                  helperText={field.helperText}
                  value={inputProps.value}
                  onChange={inputProps.onChange}
                  readOnly={field.readOnly}
                  required
                  />
                  )}
              </InputMask>
            </FormItens>
          ) : (
            <FormItens>
              <TextField
                sx={{width: "100%"}}
                label={field.label}
                type={field.type}
                id={field.id}
                name={field.name}
                error={field.error}
                helperText={field.helperText}
                value={formData[field.stateKey]}
                onChange={field.onChange}
                readOnly={field.readOnly}
                required
                />
              </FormItens>
          )}
        </div>
      ))}

      <Box sx={{display: "flex", justifyContent: "space-around"  }}>
        <FormItens>
          <Button type="submit" variant="contained">Cadastrar</Button>
        </FormItens>
        <FormItens>
          <Button onClick={handleReset} variant="contained" color="error">Limpar</Button>
        </FormItens>
      </Box>
        <AlertSuccess closeModal={closeModal} success={success} title={"Sucesso"} description={"Farmácia cadastrada"}/>
      </FormContainer>
      </form >
    </>
  );
}

function compareByCnpj(newCnpj) {
  const existingData = localStorage.getItem("pharmacy");
  if (existingData) {
    const parsedExistingData = JSON.parse(existingData);
    const dataArray = Array.isArray(parsedExistingData)
    ? parsedExistingData
    : Object.values(parsedExistingData);
    const itemsWithSameCnpj = dataArray.filter(item => item.cnpj === newCnpj);
    return itemsWithSameCnpj.length > 0;
  }

}


export { FormRegister };
