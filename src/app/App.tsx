import { Suspense } from 'react';
import classes from './App.module.scss';
import { BrowserRouter } from 'react-router-dom';
import Routing from 'pages';
import ErrorBoundary from './ErrorBoundary';
import { Spinner } from '../shared/ui/Spinner/Spinner';

import { NavBar } from '../widgets/NavBar';
import { Header } from '../widgets/Header';
import { Footer } from '../widgets/Footer';

const App = () => {
  return (
    <div className={classes.App}>
      <ErrorBoundary>
        <BrowserRouter>
          <Suspense fallback={<Spinner />}>
            <Header />
            <NavBar />
            <Routing />
            <Footer />
          </Suspense>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
};

export default App;
