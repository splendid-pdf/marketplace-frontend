import { Suspense, useEffect } from "react";
import classes from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import Routing from "pages";
import ErrorBoundary from "./ErrorBoundary";
import { Spinner } from "../shared/ui/Spinner/Spinner";
import { Header } from "../widgets/Header";
import { Footer } from "../widgets/Footer";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import { TopHeader } from "widgets/Header/TopHeader/TopHeader";
import { useAppDispatch } from './store/hooks';
import { buyerAuthActions } from '../entities/Buyer';

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(buyerAuthActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classes.App}>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Suspense fallback={<Spinner />}>
              <TopHeader />
              <Header />
              <Routing />
              <Footer />
            </Suspense>
          </BrowserRouter>
        </ThemeProvider>
      </ErrorBoundary>
    </div>
  );
};

export default App;
