import { Box, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import LogoIcon from '../../assets/urtopografia-logo.svg';

const LogoWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.text.primary};
        display: flex;
        text-decoration: none;
        width: 120px;
        margin: 0 auto;
        font-weight: ${theme.typography.fontWeightBold};
`
);

const LogoSignWrapper = styled(Box)(
  () => `
        width: 120px;
        
`
);

function Logo() {
  return (
    <Tooltip title="Tokyo Free White React Javascript Admin Dashboard" arrow>
      <LogoWrapper to="/overview">
        <LogoSignWrapper>
          <img src={LogoIcon} alt="Logo" />
        </LogoSignWrapper>
      </LogoWrapper>
    </Tooltip>
  );
}

export default Logo;
