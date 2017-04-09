import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

// 登录组件
class Register extends Component {
    render() {
        return (
            <View>
                <Text>这里是注册页面</Text>
                <TouchableOpacity onPress={this.back}>
                    <Text>返回</Text>
                </TouchableOpacity>
            </View>
        );
    }

    back() {
        global.seedApp.navigator.pop();
    }
}

export default Register;
