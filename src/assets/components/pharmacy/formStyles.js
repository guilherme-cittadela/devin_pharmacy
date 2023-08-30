import styled from 'styled-components';
import '@fontsource/roboto/300.css';

export const FormContainer = styled.div`

  display: grid;
  gap: 15px;
  width: 50vw;
  margin: auto;
  margin-top: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    width: 50vw; 
  }

`;


