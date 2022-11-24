import { GET_ALL_COURSE, GET_COURSE_DETAILS } from "../types";

const initialState = {
  list: [],
  getDetails: {},
};
export default function courses(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COURSE:
      return { ...state, list: action.payload };
    case GET_COURSE_DETAILS:
      return { ...state, getDetails: action.payload };
    default:
      return state;
  }
}
