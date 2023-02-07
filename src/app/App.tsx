import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import classes from './App.module.scss';
import ErrorBoundary from './ErrorBoundary';
import { Spinner } from '../shared/ui/Spinner/Spinner';
import { BASE_URL } from '../shared/constants/base_url';
import { NavBar } from '../widgets/NavBar';
import { HomePage } from '../pages/HomePage/HomePage';
import { UserProfilePage } from '../pages/UserProfilePage/UserProfilePage';
import { ContactsPage } from '../pages/ContactsPage/ContactsPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { Header } from '../widgets/Header';
import { Footer } from '../widgets/Footer';

const App = () => {
  const baseUrl = BASE_URL;

  return (
    <div className={classes.App}>
      <ErrorBoundary>
        <BrowserRouter>
          <Suspense fallback={<Spinner />}>
            <Header />
            <NavBar />
            <Routes>
              <Route path={`/${baseUrl}`} element={<HomePage />} />
              <Route path={`/${baseUrl}/userProfile`} element={<UserProfilePage />} />
              {/* <Route path={`/${baseUrl}/catalogue:id`} element={<ItemPage />} /> */}
              <Route path={`/${baseUrl}/contacts`} element={<ContactsPage />} />
              <Route path={`/${baseUrl}/*`} element={<NotFoundPage />} />
            </Routes>
            <Footer />
          </Suspense>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
};

export default App;
