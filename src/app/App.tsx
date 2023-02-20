import { Suspense } from "react";
import classes from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import Routing from "pages";
import ErrorBoundary from "./ErrorBoundary";
import { Spinner } from "../shared/ui/Spinner/Spinner";
import { Header } from "../widgets/Header";
import { Footer } from "../widgets/Footer";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";

const App = () => {
  return (
    <div className={classes.App}>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Suspense fallback={<Spinner />}>
              <Provider store={store}>
                <Header />
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
