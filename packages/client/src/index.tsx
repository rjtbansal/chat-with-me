import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './Router/Router';
import './styles/base.scss';

(async () => {
  ReactDOM.render(
    <AppRouter />,
    document.getElementById('app')
  );
})();
