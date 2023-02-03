import React from 'react';
import Routing from 'pages';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

const App: React.FC = () => (
  <BrowserRouter>
    <Routing />
  </BrowserRouter>
);
export default App;
