import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = () => {
    axios
      .get("http://localhost:3001/projects")
      .then((response) => {
        setProjects(response.data.reverse());
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <div>
        <div className="form-toggle">
        <Link to="/project-submit" className="addBtn">Add Project</Link>
          <h2>Submited Projects</h2>
        </div>
      </div>
      <div className="posts">
        {projects.map((project, index) => (
          <div className="post" key={project._id}>
            <h3>{index}. {project.projectTitle}.</h3>
            <p style={{fontSize: "0.9em"}}>Developer Name: {project.devName}.</p>
            <p>{project.description}</p>
            <a style={{fontSize: "0.9em"}} target="_blank" href={project.hostedURL}>Link: {project.hostedURL}</a>
            <p style={{ textAlign: "right" , fontStyle: "italic" , position:"absolute" ,right:"25px" , bottom:"10px"}}>{project.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
