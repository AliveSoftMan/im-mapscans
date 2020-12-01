import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyBvkRdd8D-cVyGOvBcnD-chDahgyUTPZEg',
	authDomain: 'mapscans-react.firebaseapp.com',
	databaseURL: 'https://mapscans-react.firebaseio.com',
	projectId: 'mapscans-react',
	storageBucket: 'mapscans-react.appspot.com',
	messagingSenderId: '44662326655',
	appId: '1:44662326655:web:08c847b4a97d1e1814c64a',
	measurementId: 'G-JMXGZPV83C',
});

var db = firebaseApp.firestore();

export { db };
