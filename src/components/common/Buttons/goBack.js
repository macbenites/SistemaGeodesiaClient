import { Box, Tooltip, IconButton } from '@mui/material';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import { useNavigate } from 'react-router';
const GoBackButton = ({ linkRoute }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(`/${linkRoute}`);
  };

  return (
    <>
      <Box display="flex" margin="0px">
        <Tooltip arrow placement="top" title="Atras" onClick={handleGoBack}>
          <IconButton color="primary" sx={{ p: 1.5, mr: 2 }}>
            <ArrowBackTwoToneIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
};

export default GoBackButton;
