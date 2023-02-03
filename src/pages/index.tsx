import { lazy } from 'react';
import { Routes, Route } from 'react-router';

const HomePage = lazy(() => import('./home/index'));

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default Routing;
