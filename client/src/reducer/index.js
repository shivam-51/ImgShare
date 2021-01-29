import { combineReducers } from "redux";

import imgreducer from "./imgreducer";

export default combineReducers({
	img: imgreducer,
});
