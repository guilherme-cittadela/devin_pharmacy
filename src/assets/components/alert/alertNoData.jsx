import { Alert, AlertTitle } from "@mui/material";
import { Link } from "react-router-dom";

function AlertNoData({ link, page}) {
    return ( 
        <Alert severity="info">
            <AlertTitle><strong>{"Aviso - "}</strong>Nenhum dado encontrado, vá para a página</AlertTitle>
                <Link style={{textDecoration: "none", color:"#1a237e", cursor: "pointer", fontWeight: "bold"}}  to={link}>{page}</Link>
        </Alert>
     );
}

export {AlertNoData};