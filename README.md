# Requirements #

* Android Studio
* Node, recommendation v8.9.4

# Installation Process #

* `npm install -g react-native-cli`
* `npm install`
* read [these](https://facebook.github.io/react-native/docs/running-on-device.html), and execute three task given below
* enable Debugging over USB
* plug in your device via USB
* connect to the development server
* `npm run generate-android-bundle`

# App Execution #

* start server 
* run/install app (/android folder) using Android Studio or execute `react-native run-android` from root folder

# Useful Things #

* need to change `implementation 'com.facebook.react:react-native:0.57.4'` of `android/app/build.gradle` if `react-native` is upgraded 
* to see console output `npm run console-output` (follow [this](https://stackoverflow.com/questions/20532440/no-command-adb-found-error-on-ubuntu/29560705#29560705) if you get error `sh: 1: adb: not found`) or use Android Studio's Logcat filtering with `I/ReactNativeJS`
* after changing `js` code, execute `npm run generate-android-bundle`
* execute `npm install --save-dev react-native-cli` while getting message `Looks like you installed react-native globally, maybe you meant react-native-cli?` while executing `npm run generate-android-bundle`

# Non-conventional rule while failing building app #

* close Android Studio
* delete `node_modules`
* delete `android/app/src/main/assets/index.android.bundle`
* delete `android/app/src/main/assets/index.android.bundle.meta`
* `npm install`
* `npm run generate-android-bundle`
* open Android Studio and do as usual