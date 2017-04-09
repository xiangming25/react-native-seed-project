import React, { Component, PropTypes } from 'react';
import {
    connect
} from 'react-native';
import Register from '../pages/register/index';

export default class RegisterContainer extends Component {
    render() {
        return (
            <Register {...this.props} />
        );
    }
}
