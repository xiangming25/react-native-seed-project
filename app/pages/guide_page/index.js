import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

// 导航页面
class GuidePage extends Component {
    render() {
        console.log('进入了GuidePage页面');
        return (
            <View style={styles.view}>
                <Text style={styles.text}>这里是导航页面</Text>
            </View>
        );
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
