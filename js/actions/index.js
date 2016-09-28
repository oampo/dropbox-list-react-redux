import Dropbox from 'dropbox';

export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';
export function setAccessToken(accessToken) {
    return {
        type: SET_ACCESS_TOKEN,
        accessToken
    }
};

export const SET_PATH = 'SET_PATH';
export function setPath(path) {
    return {
        type: SET_PATH,
        path
    }
};

export function fetchFiles(path='') {
    return (dispatch, getState) => {
        let dbx = new Dropbox({
            accessToken: getState().accessToken
        });
        return dbx.filesListFolder({
            path
        }).then(
            files => dispatch(fetchFilesSuccess(files))
        ).catch(console.error);
    };
};

export const FETCH_FILES_SUCCESS = 'FETCH_FILES_SUCCESS';
export function fetchFilesSuccess(files) {
    return {
        type: FETCH_FILES_SUCCESS,
        files
    }
};
