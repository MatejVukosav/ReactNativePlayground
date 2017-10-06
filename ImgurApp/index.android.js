/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {Provider as MobXProvider, observer} from 'mobx-react/native';
import ImgurCarousel from './components/ImgurCarousel';
import {LANDSCAPE, PORTRAIT} from './Constants';
import Store from './Store';

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';

@observer
class ImgurApp extends Component {

  onLayout(event) {
    const {width, height} = event.nativeEvent.layout;
    const orientation = (width > height)
      ? LANDSCAPE
      : PORTRAIT;

    Store.changeOrientation(orientation);
  }

  render() {
    return (
      <MobXProvider store={Store}>
        <View
          style={styles.container}
          onLayout={this
          .onLayout
          .bind(this)}>
          <ImgurCarousel/>
        </View>
      </MobXProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

AppRegistry.registerComponent('ImgurApp', () => ImgurApp);
export default ImgurApp;