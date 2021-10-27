/* eslint-disable import/prefer-default-export */
/* eslint-disable no-use-before-define */
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { css } from '@linaria/core';

import App from './App';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);

export const globals = css`
  :global() {
    html, body, #root {
      width: 100%;
      height: 100%;
      margin: 0;
    }
  }
`;
