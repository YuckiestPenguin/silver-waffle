/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm'

type Props = {};
export default class App extends Component<Props> {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyA45DtGZ4wXfO9VqcrqGjNa7_M25L2Ql_I',
            authDomain: 'manager-54e3c.firebaseapp.com',
            databaseURL: 'https://manager-54e3c.firebaseio.com',
            projectId: 'manager-54e3c',
            storageBucket: 'manager-54e3c.appspot.com',
            messagingSenderId: '331284885088'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}