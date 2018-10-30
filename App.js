/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView,
  TouchableOpacity
} from 'react-native';
import {RNCamera} from 'react-native-camera';

export default class App extends Component {

  takePicture = async () => {
    if (this.cameraRef) {
      const options = {
        quality: 0.5,
        base64: true
      };
      const data = await this.cameraRef.takePictureAsync(options);
      // console.log('width', data.width);
      // console.log('height', data.height);
      // console.log('uri', data.uri);
      // console.log('base64', data.base64);
      // console.log('exif', data.exif);
      this.sendImage(data);
    }
  };

  sendImage = (imageData) => {
    // console.log('imageData', imageData);
    if (this.webViewRef) {
      this.webViewRef.postMessage(JSON.stringify(imageData));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={(ref) => {
            this.cameraRef = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
          onGoogleVisionBarcodesDetected={({barcodes}) => {
            console.log('barcodes', barcodes);
          }}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}
          >
            <Text style={styles.buttonText}>{'SNAP'}</Text>
          </TouchableOpacity>
        </View>
        <WebView
          ref={(ref) => {
            this.webViewRef = ref;
          }}
          source={{uri: 'http://192.168.1.197:9000/'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 14
  }
});
