import { createStore, compose } from "redux";
import rootReducer from "../src/rootReducer";

const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
