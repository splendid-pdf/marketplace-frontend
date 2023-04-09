import {
  memo, Suspense, useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from './routerConfig';
import { RequireBuyerAuth } from './RequireBuyerAuth';
import { RequireSellerAuth } from './RequireSellerAuth';
import { Spinner } from '../../shared/ui/Spinner/Spinner';
import GetParameterPopups from '../../pages/PopupsRoutes';

const AppRouter = () => {
  /**
   * @description: for protected routes redirect the user to home page
   */
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<Spinner />}>
        <div className="content">
          {route.element}
        </div>
      </Suspense>
    );
    return (
      <Route
        key={route.path}
        path={route.path}
        { ...route.isAuth ? {
          ...route.buyerAuth ? 
            { element: <RequireBuyerAuth>{element}</RequireBuyerAuth> } 
            : 
            { element: <RequireSellerAuth>{element}</RequireSellerAuth> },
        } : { element } }
      />
    );
  }, []);

  return (
    <div className={"content"}>
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
      <GetParameterPopups />
    </div>
  );
};

export default memo(AppRouter);
