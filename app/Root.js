import React, { Component } from 'react';
import { NetInfo, Platform } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './containers/app';

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}
