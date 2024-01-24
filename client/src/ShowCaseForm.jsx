import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
function ShowCaseForm() {
  const loginDataCookie = Cookies.get("loginData");
  const [projectTitle, setProjectTitle] = useState();
  const [devName, setDevName] = useState(JSON.parse(loginDataCookie).name);
  const [description, setDescription] = useState();
  const [hostedURL, setHostedURL] = useState();
  const date = new Date();
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/project-submit", {
        projectTitle,
        devName,
        description,
        hostedURL,
        date: date.toLocaleDateString(),
      })
      .then((result) => {
        console.log(result);
        Navigate("/home");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-modal">
      <div className="form-toggle">
        <h2>Submit Project</h2>
      </div>

      <div id="signup-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Project Title"
            autoComplete="off"
            name="projectTitle"
            onChange={(e) => setProjectTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter Name"
            autoComplete="off"
            name="devName"
            value={devName}
            readOnly
          />
          <textarea
            placeholder="Enter Discription"
            autoComplete="off"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter Host URL"
            autoComplete="off"
            name="hostedURL"
            onChange={(e) => setHostedURL(e.target.value)}
            required
          />
          <button className="btn signup">Submit</button>
        </form>
        <Link to="/home">
          <button className="btn signup" style={{ width: "90%", margin: "0px 23px" }} >
            Projects
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ShowCaseForm;
