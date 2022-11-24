import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllCourses } from "../../redux/action/course";
import Cards from "../common/card";
import "../../asserts/css/course_list.css";

const CourseList = () => {
  const courses = useSelector((state) => state.courses);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    getAllCourseList();
  }, []);
  console.log("courses", courses);
  const getAllCourseList = () => {
    dispatch(getAllCourses());
  };
  return (
    <div className="course-list">
      <div className="row">
        {courses && courses.list && courses.list.length ? (
          courses.list.map((course, index) => (
            <div
              key={index}
              className="col-sm-12 col-md-3 col-lg-4 col-xl-4"
              onClick={() => navigate(`/course-details/${course.idCourse}`)}
            >
              <Cards details={course} />
            </div>
          ))
        ) : (
          <div>Not Found</div>
        )}
      </div>
    </div>
  );
};

export default CourseList;
