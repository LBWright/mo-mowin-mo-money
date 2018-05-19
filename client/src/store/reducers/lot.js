import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER:
            return {
                isLoggedIn: true
            };
        case actionTypes.LOGOUT_USER:
            return {
                isLoggedIn: false
            }
    };
};