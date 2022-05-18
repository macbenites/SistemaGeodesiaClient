import { Dialog, DialogContent, Grid, Typography } from '@mui/material';

import AssistantTwoToneIcon from '@mui/icons-material/AssistantTwoTone';

export default function BasicModal({ modal, setModal, message }) {
  const handleClose = () => setModal(false);
  return (
    <Dialog onClose={handleClose} open={!modal ? false : modal}>
      <DialogContent>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <AssistantTwoToneIcon />
          </Grid>
          <Grid item>
            <Typography variant="h4" color="primary">
              {message}
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
