import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/index';
import File from './file';
import Folder from './folder';

export class FileList extends React.Component {
    componentDidMount() {
        this.props.dispatch(actions.fetchFiles(this.props.path));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.path !== this.props.path) {
            this.props.dispatch(actions.fetchFiles(nextProps.path));
        }
    }

    render() {
        const files = this.props.files.map((file) => {
            if (file['.tag'] === 'folder') {
                return <Folder key={file.id} {...file} />;
            }
            else if (file['.tag'] === 'file') {
                return <File key={file.id} {...file} />;
            }
        });
        return (
            <ul>
                {files}
            </ul>
        );
    }
};

FileList.defaultProps = {
    files: [],
    path: ''
};

function mapStateToProps(state) {
    return {
        files: state.files,
        path: state.path
    };
}

export default connect(mapStateToProps)(FileList);
