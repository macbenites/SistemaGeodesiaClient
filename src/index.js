import App from './App';
import ReactDOM from 'react-dom';
import 'src/utils/chart';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import 'nprogress/nprogress.css';
import { SidebarProvider } from './contexts/SidebarContext';

ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider>
      <SidebarProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SidebarProvider>
    </HelmetProvider>
  </Provider>,
  document.getElementById('root')
);
