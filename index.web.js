/**
 * React Native for Web Starter App
 * Follow me https://twitter.com/grabthecode
 */

import { AppRegistry,Platform } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('myrnwebdemo', () => App);

AppRegistry.runApplication('myrnwebdemo', {
    rootTag: document.getElementById('react-root')
});