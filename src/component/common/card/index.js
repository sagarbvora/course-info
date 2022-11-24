import React from "react";
import { useNavigate } from "react-router";

const Cards = ({ details }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card-layout"
      onClick={() => navigate(`/course-details/${details?.idCourse}`)}
    >
      <img
        className="card-image"
        src={details?.imageUrl}
        alt="Card image cap"
      />
      <div className="card-body-data">
        <div className="card-data-title">{details?.name}</div>
        <div className="card-body-content">{details?.info}</div>
      </div>
    </div>
  );
};

export default Cards;
