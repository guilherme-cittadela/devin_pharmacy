import { Modal, Alert, AlertTitle } from '@mui/material';


function AlertSuccess({closeModal, success, title, description}) {
    return ( 
        <>
        <Modal
          open={success}
          onRequestClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Alert severity="success">
            <AlertTitle><strong>{title}</strong></AlertTitle>
                {description}
          </Alert>
        </Modal>
        </>
     );
}

export { AlertSuccess };