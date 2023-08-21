import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Box } from '@mui/material';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { PlusIcon } from '../../global/icons';

function CardMedication({id, name, description, laboratory, dosage, price, type}) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 250,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };



  return (
    <>
      <Card>
          <CardMedia
            title="green iguana"
            id={id}
            />
          <CardContent>

            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              R$ {price.toFixed(2)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={handleOpen} size="small">
              <PlusIcon />Ver mais
            </Button>
          </CardActions>
        </Card>

      <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
          <Box sx={{display:'flex', flexDirection: "column", p: 4 }}>
            <Chip sx={{m: 1}}label={laboratory}/>
            <Chip sx={{m: 1}}label={dosage}/>
            <Chip sx={{m: 1}}label={type}/>
          </Box>
          <Button onClick={handleClose} size="small">
            Fechar
          </Button>
      </Box>
      </Modal>
    </>
  );
}

export { CardMedication }