import { useRoutes } from 'react-router-dom';
import routes from './router';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import ThemeProvider from './theme/ThemeProvider';
import { CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';

const App = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const content = useRoutes(routes(isLoggedIn));

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        {content}
      </LocalizationProvider>
    </ThemeProvider>
  );
};
export default App;
