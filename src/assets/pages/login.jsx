import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
function Login() {
    return ( 
        <>  
        <Box sx={{ display: "flex", flexDirection: "column", margin:"16px", justifyContent: "space-around"}}> 

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
        </Box>
        </>
     );
}

export { Login };
