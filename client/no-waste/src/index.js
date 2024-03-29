import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'tachyons'
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './State/AuthContext';
import { FoodItemsProvider } from './State/ItemsContext';
import {ChakraProvider} from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ChakraProvider>
  <FoodItemsProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </FoodItemsProvider>
  </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
