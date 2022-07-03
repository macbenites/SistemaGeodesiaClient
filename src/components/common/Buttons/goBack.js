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
      <Box display="flex">
        <Tooltip arrow placement="top" title="Go back" onClick={handleGoBack}>
          <IconButton color="primary" sx={{ p: 2, mr: 2 }}>
            <ArrowBackTwoToneIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
};

export default GoBackButton;
