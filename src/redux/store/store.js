import { createStore } from "redux";
import historyreducer from "../reducer/historyreducer";

const store = createStore(historyreducer)

export default store