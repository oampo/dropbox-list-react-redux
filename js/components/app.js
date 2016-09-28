import React from 'react';
import { connect } from 'react-redux';
import qs from 'qs';

import * as actions from '../actions/index';
import FileList from './file-list';
import Splash from './splash';

export class App extends React.Component {
    componentDidMount() {
        const accessToken = qs.parse(window.location.hash.slice(1)).access_token;
        if (accessToken) {
            this.props.dispatch(actions.setAccessToken(accessToken));
        }
    }

    render() {
        let component;

        if (this.props.accessToken) {
            component = <FileList />;
        }
        else {
            component = <Splash />;
        }

        return component;
    }
};

function mapStateToProps(state) {
    return {
        accessToken: state.accessToken
    };
};

export default connect(mapStateToProps)(App);
