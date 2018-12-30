var firebase = require('firebase/app')
require('firebase/auth')

var config = {
  apiKey: 'AIzaSyA-V8Fp9YeprYF1kajzuDsFr4VAweYo_zI',
  authDomain: 'hubauth-d1ff7.firebaseapp.com',
  databaseURL: 'https://hubauth-d1ff7.firebaseio.com',
  projectId: 'hubauth-d1ff7',
  storageBucket: 'hubauth-d1ff7.appspot.com',
  messagingSenderId: '417785285331'
}
firebase.initializeApp(config)

module.exports = firebase
