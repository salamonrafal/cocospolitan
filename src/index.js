// Default import
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Import containers
import App from './containers/App'; 

// Import Store configuration
import configureStore from './redux/stores'; 

const store = configureStore(); 
const ROOT_ELEMENT_ID = 'rootApp';


render( 
    <Provider store={store}> 
       <App />
    </Provider>, 
    document.getElementById(ROOT_ELEMENT_ID) 
);