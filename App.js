/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import openMap from 'react-native-open-maps';
import { Button } from 'react-native';
import Path from './Components/Path';
// import {MapView} from 'react-native-maps';

export default class App extends Component {
  _goToButton() {
    openMap({ latitude: 37.865101, longitude: -119.538330 });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to shortest Path App!</Text>
          <Button
          color={'#bdc3c7'}
          onPress={this._goToButton}
          title="Click To Open Maps 🗺" />
          {/* <Path/> */}
      </View>
      // <MapView
        
      //   style={{flex: 1}}
      //   region={{
      //     latitude: 42.882004,
      //     longitude: 74.582748,
      //     latitudeDelta: 0.0922,
      //     longitudeDelta: 0.0421
      //   }}
      //   showsUserLocation={true}
      // />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
