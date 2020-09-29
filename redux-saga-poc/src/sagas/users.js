import { takeEvery, takeLatest, call, fork, put } from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../api/users";

function* getUsers() {
    try {
        const result = yield call(api.getUsers);
        yield put(actions.getUsersSuccess({
            items: result.data.data
        }))
    } catch (error) {

    }
}

function* watchGetUsersRequest() {
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}


function* createUsers(action) {
    try {
        yield call(api.createUser,{firstName: action.payload.firstName, lastName: action.payload.lastName});
        console.log("calling")
        yield call(getUsers);
    } catch (error) {

    }
}

function* watchCreateUsersRequest() {
    yield takeLatest(actions.Types.CREAT_USERS_REQUEST, createUsers);
}

const usersSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUsersRequest)
];

export default usersSagas;