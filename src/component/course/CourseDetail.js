import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCourseDetails } from "../../redux/action/course";
import { ReactComponent as LiveIcon } from "../../asserts/images/live.svg";
import { ReactComponent as MileStoneIcon } from "../../asserts/images/milestone.svg";
import { ReactComponent as SessionIcon } from "../../asserts/images/session.svg";
import LearningConcept from "../../asserts/images/learning.jpg";
import "../../asserts/css/course_details.css";

const CourseDetail = () => {
  const courses = useSelector((state) => state.courses);
  const {
    imageUrl,
    amount,
    amountUsd,
    duration,
    info,
    name,
    subjectName,
    liveSessionCount,
    milestoneCount,
    sessionCount,
  } = courses?.getDetails;
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (params?.id) {
      getDetails(params?.id);
    }
  }, []);

  const getDetails = (id) => {
    dispatch(getCourseDetails(id));
  };

  return (
    <div className="course-details-layout">
      <div className="banner-image">
        <img src={LearningConcept}/>
      </div>
      <div className="course-details-container">
        <div className="course-image-name">
          <img
            className="course-details-card-image"
            src={imageUrl}
            alt="Card image cap"
          />
          <div className="course-details">
            <div className="course-details-title-subject">
              <div>
                <div className="course-data-title">{name}</div>
                <div className="course-data-subject">{`(${subjectName})`}</div>
              </div>
              <div>
                <div>{`${amount} ₹`}</div>
                <div>{`(${amountUsd} $)`}</div>
              </div>
            </div>
            <div className="course-data-info">{info}</div>
            <div className="course-data-info">Total Duration: {duration}</div>
            <div className="icon-list">
              <div>Live Sessions:</div>
              <div className="icon-title-div">
                <LiveIcon className="icon-datas" />{" "}
                <div>{liveSessionCount}</div>
              </div>
            </div>
            <div className="icon-list">
              <div>Milestone:</div>
              <div className="icon-title-div">
                <MileStoneIcon className="icon-datas" />
                <div> {milestoneCount}</div>
              </div>
            </div>
            <div className="icon-list">
              <div>Total Sessions:</div>
              <div className="icon-title-div">
                <SessionIcon className="icon-datas" />
                <div> {sessionCount}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
