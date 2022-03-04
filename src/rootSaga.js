import { all } from "redux-saga/effects";
import usersSaga from "./modules/NewChat/saga";

function* rootSaga() {
  yield all([usersSaga()]);
}

export default rootSaga;
