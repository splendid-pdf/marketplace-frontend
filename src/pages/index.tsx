import { lazy } from 'react';
import { Routes, Route } from 'react-router';
import { BASE_URL } from '../shared/constants/base_url';

const HomePage = lazy(() => import('./home/index'));

const Routing = () => {
  return (
    <Routes>
      <Route path={`/${BASE_URL}`} element={<HomePage />} />
    </Routes>
  );
};

export default Routing;
