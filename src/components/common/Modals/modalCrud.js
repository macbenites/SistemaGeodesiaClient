import { Dialog, DialogContent, Grid, Container } from '@mui/material';

export default function ModalCrud({ modal, setModal, children }) {
  const handleClose = () => setModal(false);
  return (
    <Dialog onClose={handleClose} open={!modal ? false : modal} maxWidth="md">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        {children}
      </Grid>
    </Dialog>
  );
}
