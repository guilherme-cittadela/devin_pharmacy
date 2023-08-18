import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { FormContainer } from '../components/pharmacy/formStyles';
function Login() {
    return ( 
        <>  

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                }}
                autoComplete="off"
            >
                <FormContainer>
                    <TextField 
                    id="login" 
                    label="Login" 
                    variant="outlined"
                    required />

                    <TextField 
                    id="password" 
                    label="Senha" 
                    variant="outlined"
                    required
                    type="password" />

                    <Button variant="contained">Entrar</Button>
                    <Button variant="text">Esqueceu sua senha?</Button>
                </FormContainer>
            </Box>
        
        </>
     );
}

export { Login };