import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BearsProvider from "./contexts/bearsProviders";
import App from './App';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
<BearsProvider>
<App />
</BearsProvider>,

document.getElementById('root'));
registerServiceWorker();
