import React, { Component,PropTypes } from 'react';
import {
    connect,
} from 'react-redux';
import Login from '../pages/login/index';

class LoginContainer extends Component {
    render() {
        return (
            <Login {...this.props} />
        );
    }
}

export default connect((state) => {
    return {
        userInfo: state.user
    }
})(LoginContainer);
