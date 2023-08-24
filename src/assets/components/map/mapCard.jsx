import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function MapCard({id, title, email, phone, street, number, neighborhood, city, state}) {
    return ( 
        <>
        <Card>
            <CardMedia
            id={id}
            title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {`Email: ${email}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {`Telefone: ${phone}`}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {`${street}, ${number}, ${neighborhood} ${city} ${state}`}
                </Typography>
                
            </CardContent>
        </Card>
        </>
     );
}

export default MapCard;