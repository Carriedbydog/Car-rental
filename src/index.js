import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Global } from 'styles/Global';
import { SidebarProvider } from 'components/Сontext/Context';
import { Toastify } from 'components/Toastify/Toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter basename="/Car-rental">
      <SidebarProvider>
        <App />
        <Toastify />
        <Global />
      </SidebarProvider>
    </BrowserRouter>
  </Provider>
);
