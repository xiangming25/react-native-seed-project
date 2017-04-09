import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import {
    Navigator,
    View,
    Text,
    StyleSheet,
} from 'react-native';
import GuidePage from '../pages/guide_page/index';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {this.renderContent()}
            </View>
        );
    }

    // 需要渲染的内容区域
    renderContent() {
        const initialRoute = {component: GuidePage,id:'GUIDEPAGE'};
        return (
            <View style={styles.container}>
                {
                    <Navigator
                    initialRoute={initialRoute}
                    renderScene = {(route,navigator) => {
                        global.seedApp.route = route;
                        global.seedApp.navigator = navigator;
                        let Component = route.component;
                        return (
                            <View style={{flex:1}}>
                                <Component navigator={navigator} route={route}></Component>
                            </View>
                        );
                    }}
                />
            }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
export default connect(state => ({

}))(App);
