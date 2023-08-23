import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormContainer } from "../global/formStyles";
import { useState } from "react";
import { validateEmail, validatePassword, validateLogin } from "../global/functions";
/*import { Redirect } from "react-router-dom";*/

function Login() {
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(true);
    const [password, setPassword] = useState("")
    const [passwordValid, setPasswordValid] = useState(true);
    const isLoginValid = validateLogin(emailValid, passwordValid, email, password);
    

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        setEmailValid(validateEmail(newEmail));}
        
    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        setPasswordValid(validatePassword(newPassword));}

    const formInput = [
        {label: "Login",
        value: email,
        onChange: handleEmailChange,
        error: emailValid,
        helperText:  "Email inválido",
        type:"text"
        },

        {label: "Senha",
        value: password,
        onChange: handlePasswordChange,
        error: passwordValid,
        helperText:  "Senha inválida!",
        type: "password"
        },

    ]
    const handleLogin = () => {
        if (validateLogin(emailValid, passwordValid, email, password))  {
          return console.log("xd");/*implementar rota*/
        }
      };
    return ( 
        <>  
            <FormContainer>
               {formInput.map(({value, label, onChange, error, helper, type, idx})=>{
                return(
                    <div key={idx}>

                        <TextField
                        label={label}
                        sx={{m:1}}
                        value={value}
                        onChange={onChange}
                        error={!error}
                        helperText={helper}
                        type={type}
                        />
                    </div>
                )
               })}


                <Button variant="contained" onClick={handleLogin} disabled={!isLoginValid}>Entrar</Button>
                <Button variant="text">Cadastrar</Button>
                <Button variant="text">Esqueceu sua senha?</Button>
            </FormContainer>
    
        </>
     );
}

export { Login };