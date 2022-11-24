import { PATH } from "../../services/apiConstant";
import { GET_ALL_COURSE, GET_COURSE_DETAILS } from "../types";
import { loadingStart, loadingStop } from "./loader";
import { apiClient } from "../../services/ApiConfig";

export const getAllCourses = () => (dispatch) => {
  dispatch(loadingStart());
  return new Promise((resolve, reject) => {
    apiClient({
      method: "GET",
      url: PATH.course.grtAllCourses,
    })
      .then((response) => {
        resolve(response?.data?.body);
        dispatch({
          type: GET_ALL_COURSE,
          payload: response?.data?.body || [],
        });
      })
      .catch((error) => {
        reject(error);
      })
      .finally(() => dispatch(loadingStop()));
  });
};

export const getCourseDetails = (id) => async (dispatch) => {
  try {
    const data = await dispatch(getAllCourses());
    const getCourse =
      data && data.length && data.find((course) => course.idCourse === id);
    dispatch({
      type: GET_COURSE_DETAILS,
      payload: getCourse || {},
    });
  } catch (error) {
    throw new Error(error);
  }
};
