import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormContainer } from "../global/styles/formStyles";
import { useEffect, useState } from "react";
import { validateEmail, validatePassword, validateLogin } from "../global/functions/functions";
import { useAuth } from "../context/authContext";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { Alert } from "@mui/material";

function Login() {
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(true);
    const [password, setPassword] = useState("")
    const [passwordValid, setPasswordValid] = useState(true);
    const isLoginValid = validateLogin(emailValid, passwordValid, email, password);
    const [helperTextEmail, setHelperTextEmail] = useState("")
    const [helperTextPassword, setHelperTextPassword] = useState("")
    const { login } = useAuth(); 
    

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
        helperText: helperTextEmail,
        type:"text"
        },

        {label: "Senha",
        value: password,
        onChange: handlePasswordChange,
        error: passwordValid,
        helperText: helperTextPassword,
        type: "password"
        },

    ]
    const handleLogin = () => {
        login()
      };

    useEffect(()=>{
        emailValid? setHelperTextEmail(""): setHelperTextEmail("Email inválido")
    }, [emailValid])
    return ( 
        <>  
            <Header/>
            <FormContainer>
                <h1>Bem vindo a <strong>DevIn Pharmacy</strong></h1>
                <h3>Faça o login:</h3>
                {formInput.map(({value, label, onChange, error, helperText, type, idx})=>{
                    return(
                        <div key={idx}>
                            <TextField
                            label={label}
                            sx={{m:1}}
                            value={value}
                            onChange={onChange}
                            error={!error}
                            helperText={helperText}
                            type={type}
                            />
                        </div>
                    )
                })}
                {!passwordValid && <Alert severity="error">Sua senha deve possuir tamanho de 8 caracteres e pelo menos um número, uma letra maíuscula e um caractere especial</Alert>}

            </FormContainer>
            <FormContainer>
                <Button variant="contained" onClick={handleLogin} disabled={!isLoginValid}>Entrar</Button>
                <Button variant="text">Cadastrar</Button>
                <Button variant="text">Esqueceu sua senha?</Button>
            </FormContainer>
            <Footer/>
        </>
     );
}

export { Login };