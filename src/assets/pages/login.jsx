import { Campo } from "../components/campo";

function Login() {
    return ( 
        <>
            <Campo type="text" label="Login"/>
            <Campo type="password" label="Senha"/>
        </>
     );
}

export { Login };