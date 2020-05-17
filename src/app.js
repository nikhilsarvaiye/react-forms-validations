import React from 'react';
import { hot } from 'react-hot-loader';
import { Home } from './modules/home';
import './app.scss';

class App extends React.PureComponent {
    render() {
        return <Home />;
    }
}

export default hot(module)(App);
