import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import LoginContainer from '../../containers/LoginContainer';
import RegisterContainer from '../../containers/RegisterContainer';

// 导航页面
class GuidePage extends Component {
    render() {
        console.log('进入了GuidePage页面');
        return (
            <View style={styles.view}>
                <Text style={styles.text}>这里是导航页面</Text>
                <TouchableOpacity onPress={this.gotoLogin.bind(this)}>
                    <Text>登录</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.gotoRegister.bind(this)}>
                    <Text>注册</Text>
                </TouchableOpacity>
            </View>
        );
    }

    gotoLogin() {
        global.seedApp.navigator.push({
            component: LoginContainer,
            id: 'LOGIN'
        });
    }

    gotoRegister() {
        global.seedApp.navigator.push({
            component: RegisterContainer,
            id: 'REGISTER'
        });
    }
}
const styles = StyleSheet.create({
    view: {
        backgroundColor: '#ff0',
    },
    text: {
        fontSize: 100,
        color: '#f00'
    }
});

export default GuidePage;
