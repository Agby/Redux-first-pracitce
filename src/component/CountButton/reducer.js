import { TYPES } from './action.js'

let initialState = {
    clickCount: 0
};

export default function clickReducer (state = initialState, action) {
    switch (action.type) {
        case TYPES.CLICKEVENT:
            state.clickCount += action.count;
            console.log("bbb",{...state});
            console.log("aaa",state);
            return {...state};
        default:
            return state;
    }
}
