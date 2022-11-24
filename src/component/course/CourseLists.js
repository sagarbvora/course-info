import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../redux/action/course";
import Cards from "../common/card";
import { ReactComponent as Banner } from "../../asserts/images/online-learning-concept.svg";
import "../../asserts/css/course_list.css";

const CourseLists = () => {
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  useEffect(() => {
    getAllCourseList();
  }, []);

  const getAllCourseList = () => {
    dispatch(getAllCourses());
  };
  return (
    <div className="course-list-layout">
      <div className="banner-container">
          <Banner />
      </div>
      <div className="course-list-title">Course Lists</div>
      <div className="course-list-container">
        {courses && courses.list && courses.list.length ? (
          courses.list.map((course, index) => (
            <React.Fragment key={index}>
              <Cards details={course} />
            </React.Fragment>
          ))
        ) : (
          <div>Not Found</div>
        )}
      </div>
    </div>
  );
};

export default CourseLists;
