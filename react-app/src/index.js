import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ModalProvider } from './context/Modal';
import './index.css';
import App from './App';
import configureStore from './store';
import ThemeProvider from './context/Theme';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const store = configureStore();
<link href='https://fonts.googleapis.com/css?family=Varela Round' rel='stylesheet'></link>

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ModalProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ModalProvider>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(
  // <React.StrictMode>
    <Root />,
  // </React.StrictMode>,
  document.getElementById('root')
);
