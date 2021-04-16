import {GLOBAL_ACTIONS} from "../actions/actionTypes";

interface ICommonState {
    selectedFolder: number;
}

const initialState: ICommonState = {
    selectedFolder: 1
};

export default function commonReducer(state = initialState, action) {
    let newState: ICommonState;
    switch (action.type) {
        case GLOBAL_ACTIONS.SELECTED_FOLDER:
            newState = {...state};
            newState.selectedFolder = action.val;
            return newState;
        default:
            return state;
    }
}
