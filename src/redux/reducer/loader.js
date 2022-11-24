import { LOADER_START, LOADER_STOP } from "../types";

const initialState = false;
export default function loader(state = initialState, action) {
    switch (action.type) {
        case LOADER_START:
            return action.payload;
        case LOADER_STOP:
            return action.payload;
        default:
            return state;
    }
}