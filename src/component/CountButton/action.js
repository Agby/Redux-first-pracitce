export const TYPES = {
    CLICKEVENT: 'CLICKEVENT'
};

export var clickAction = function(count = 1, delay = 0) {
    return function (dispatch) {
        setTimeout(function () {
            console.log(new Date(), 'Dispatch action now:')
            dispatch({
                type: TYPES.CLICKEVENT,
                count,
                delay
            })
        }, 2000)
}
};

export default {
    clickAction
};