import React from 'react';
import { hot } from 'react-hot-loader';
import { Home } from './modules/home';
// import { Employee } from './modules/employee/employee';
import './app.scss';

class App extends React.PureComponent {
    render() {
        return (
            <div>
                {/* <Employee /> */}
                <Home />
            </div>
        );
    }
}

export default hot(module)(App);
