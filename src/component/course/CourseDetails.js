import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCourseDetails } from "../../redux/action/course";
import Cards from "../common/card";

const CourseDetails = () => {
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const params = useParams();
  const [courseDetails, setCourseDetails] = useState({});

  useEffect(() => {
    if (params?.id) {
      getDetails(params?.id);
    }
  }, []);

  const getDetails = (id) => {
    dispatch(getCourseDetails(id));
  };

  console.log("courseDetails", courses?.getDetails);
  return <div><Cards details={courses?.getDetails} /></div>;
};

export default CourseDetails;
