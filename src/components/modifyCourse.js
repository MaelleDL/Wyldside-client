import React from "react";

const ModifyCourse = ({ course }) => {

  return (
    <div className="card">
        <h2 className="title">{course.name}</h2>
        <img src={course.image_path} alt="img" width="100%" />
        <p>{course.description}</p>
        <button type="button">MODIFIER</button>
        <button>SUPPRIMER</button>
    </div>
  );
};
export default ModifyCourse;