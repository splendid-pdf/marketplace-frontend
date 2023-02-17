import { Suspense } from 'react';
import classes from './App.module.scss';
import { BrowserRouter } from 'react-router-dom';
import Routing from 'pages';
import ErrorBoundary from './ErrorBoundary';
import { Spinner } from '../shared/ui/Spinner/Spinner';
import { NavBar } from '../widgets/NavBar';
import { Header } from '../widgets/Header';
import { Footer } from '../widgets/Footer';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ThemeProvider } from '@mui/material';
import { grey} from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F15513'
    },
    secondary: grey //  TODO: Поставить второй цвет от дизайнеров и Разобраться, как его можно использовать
  },
  typography: {
    fontFamily: 'Montserrat',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold:600,
  }
});

const App = () => {
  return (
    <div className={classes.App}>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Suspense fallback={<Spinner />}>
              <Provider store={store}>
                <Header />
                <NavBar />
                <Routing />
                <Footer />
              </Provider>
            </Suspense>
          </BrowserRouter>
        </ThemeProvider>
      </ErrorBoundary>
    </div>
  );
};

export default App;
