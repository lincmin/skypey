import {createStore} from "redux"
import reducer from "../reducers/index"
// const contacts = {}

const store = createStore(reducer)

export default store