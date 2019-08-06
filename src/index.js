import React from 'react';
import ReactDOM from 'react-dom';

import { ContextProvider } from './Context';
import App from './App.js';
import './index.css';

ReactDOM.render(
	<ContextProvider>
		<App />
	</ContextProvider>,
	document.getElementById('root')
);
