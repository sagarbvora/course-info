import { lazy } from "react";
const CourseLists = lazy(() => import("../component/course/CourseLists"));
const CourseDetail = lazy(() => import("../component/course/CourseDetail"));

export const routes = [
  {
    path: "/",
    element: CourseLists,
    exact: true,
  },
  {
    path: "/course-details/:id",
    element: CourseDetail,
    exact: true,
  },
];
