import * as actions from '../actions/index';

const initialState = {
    accessToken: null,
    path: '',
    files: []
};

export default function reducer(state=initialState, action) {
    if (action.type === actions.SET_ACCESS_TOKEN) {
        return Object.assign({}, state, {
            accessToken: action.accessToken
        });
    }
    else if (action.type === actions.SET_PATH) {
        return Object.assign({}, state, {
            path: action.path
        });
    }
    else if (action.type === actions.FETCH_FILES_SUCCESS) {
        return Object.assign({}, state, {
            files: action.files.entries.filter(
                file => file['.tag'] !== 'deleted'
            ).sort(file => file['.tag'] === 'file' ? 1 : 0)
        });
    }
    return state;
};
