import { lazy } from 'react';
const CourseList = lazy(() => import("../component/course/CourseList"));
const CourseDetails = lazy(() => import("../component/course/CourseDetails"));

export const routes = [
  {
    path: "/",
    element: CourseList,
    exact: true,
  },
  {
    path: "/course-details/:id",
    element: CourseDetails,
    exact: true,
  },
];
