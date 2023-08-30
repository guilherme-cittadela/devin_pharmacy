import styled from 'styled-components';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
  gap: 15px;
  width: 90vw;
  margin: auto;
  padding: 10px;

`
const FormItens = styled.div`
    margin: 10px;
    width: 100%;
`
;

export { CardContainer, FormItens}