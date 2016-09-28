import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/index';


export class Folder extends React.Component {
    constructor(props) {
        super(props);
        this.enterFolder = this.enterFolder.bind(this);
    }

    enterFolder(event) {
        this.props.dispatch(actions.setPath(this.props.path_lower));
    }

    render() {
        return (
            <li><a href="#" onClick={this.enterFolder}>{this.props.name}</a></li>
        );
    }
};

export default connect()(Folder);

