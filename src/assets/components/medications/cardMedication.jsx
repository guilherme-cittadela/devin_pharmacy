import { Box, Modal, Button, Typography, Chip, CardMedia, CardContent, CardActions, Card } from '@mui/material';
import { useState } from 'react';
import { PlusIcon } from '../../global/icons';
import ImgMedication from "../../global/images/medication.png"

function CardMedication({id, name, description, laboratory, dosage, price, type}) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const typeDescription = type === "common"? "Comum": "Controlado"
  const formatPrice = typeof price ==="string"? parseFloat(price).toFixed(2) : price.toFixed(2)

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
            title="medication detail"
            id={id}
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              R$ {formatPrice}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={handleOpen} size="medium">
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
            <img 
              src={ImgMedication}
            />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
          <Box sx={{display:'flex', flexDirection: "column", p: 4 }}>
            <Chip sx={{m: 1}}label={laboratory}/>
            <Chip sx={{m: 1}}label={typeDescription}/>
            <Chip sx={{m: 1}}label={dosage}/>
            <Chip sx={{m: 1}}label={`R$ ${formatPrice}`}/>
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