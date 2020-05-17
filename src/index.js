import { hot } from 'react-hot-loader/root';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

const AppComponent = hot(App);
const rootElement = window.document.getElementById('root');

ReactDOM.render(
    <AppContainer>
        <>
            <AppComponent />
        </>
    </AppContainer>,
    rootElement,
);
