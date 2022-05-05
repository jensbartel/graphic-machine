import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LangState from './context/lang/LangState';

ReactDOM.render(
    // <React.StrictMode>
    <LangState>
        <App />
    </LangState>,
    // </React.StrictMode>,
    document.getElementById('root')
);
