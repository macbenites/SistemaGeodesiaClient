import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import LogoSide from '../../assets/urtopografia-logo.svg';

const LogoWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.text.primary};
        padding: ${theme.spacing(0, 1, 0, 0)};
        display: flex;
        text-decoration: none;
        font-weight: ${theme.typography.fontWeightBold};
`
);

const LogoSignWrapper = styled(Box)(
  () => `
        width: 150px;        
        margin-top: 4px;
        transform: scale(.8);
`
);

function Logo() {
  return (
    <LogoWrapper to="/overview">
      <LogoSignWrapper>
        <img src={LogoSide} alt="logo" />
      </LogoSignWrapper>
    </LogoWrapper>
  );
}

export default Logo;
