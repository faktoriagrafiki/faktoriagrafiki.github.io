import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import App from './App'
import i18next from 'i18next';
import { i18config } from './i18.config';
import { I18nextProvider } from 'react-i18next';

i18next.init(i18config);

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
