import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ResumeContext } from "../../Context/ResumeContext";
import "./CustomerPage.css";
const CustomerPage = () => {
  const { takeData } = useContext(ResumeContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    headline: "",
    about: "",
    email: "",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    github: "",
    mobile: "",
    school: "",
    school_passout: "",
    intermediate: "",
    intermediate_passout: "",
    college: "",
    college_passout: "",
    company: "",
    company_join: "",
    company_leave: "",
    designation: "",
    tech_skills: "",
    soft_skills: "",
    hobies: "",
  });
  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    takeData(form, image);
    navigate("/preview");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Personal Details</h1>
          <div className="single-line">
            <div>Name:</div>
            <input
              required
              onChange={handleChange}
              type="text"
              placeholder="Enter Name"
              name="name"
            />
          </div>
          <div className="single-line">
            <div>HeadLine:</div>
            <input
              required
              onChange={handleChange}
              type="text"
              placeholder="Enter Headline"
              name="headline"
            />
          </div>
          <div className="single-line">
            <div>About:</div>
            <textarea
              required
              onChange={handleChange}
              type="text"
              placeholder="About"
              name="about"
            />
          </div>
          <div className="sinle-line">
            <div>Photo:</div>
            <input
              required
              onChange={(e) => handleImage(e)}
              type="file"
              name="photo"
            />
          </div>
        </div>
        <div>
          <h1>Contact Info</h1>
          <div className="single-line">
            <div>Email:</div>
            <input
              required
              onChange={handleChange}
              type="text"
              placeholder="Email Address"
              name="email"
            />
          </div>
          <div className="single-line">
            <div>Facebook:</div>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Facebook Account"
              name="facebook"
            />
          </div>
          <div className="single-line">
            <div>Twitter:</div>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Twitter Account"
              name="twitter"
            />
          </div>
          <div className="single-line">
            <div>Instagram:</div>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Instagram Account"
              name="instagram"
            />
          </div>
          <div className="single-line">
            <div>LinkedIn:</div>
            <input
              required
              onChange={handleChange}
              type="text"
              placeholder="LinkedIn Account"
              name="linkedin"
            />
          </div>
          <div className="single-line">
            <div>Github:</div>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Github Account"
              name="github"
            />
          </div>
          <div className="single-line">
            <div>Mobile:</div>
            <input
              required
              onChange={handleChange}
              type="text"
              placeholder="Whatsapp Number"
              name="mobile"
            />
          </div>
        </div>
        <div>
          <h1>Education Details</h1>
          <div>
            <p>Matriculation</p>
            <div className="single-line">
              <div>School:</div>
              <input
                required
                onChange={handleChange}
                type="text"
                placeholder="School Name"
                name="school"
              />
            </div>
            <div className="single-line">
              <div>Passout date:</div>
              <input
                required
                onChange={handleChange}
                type="datetime"
                name="school_passout"
                id=""
                placeholder="eg : 12/03/2013"
              />
            </div>
          </div>
          <div>
            <p>Intermediate</p>
            <div className="single-line">
              <div>College:</div>
              <input
                required
                onChange={handleChange}
                type="text"
                placeholder="School Name"
                name="intermediate"
              />
            </div>
            <div className="single-line">
              <div>Passout date:</div>
              <input
                required
                onChange={handleChange}
                type="datetime"
                name="intermediate_passout"
                id=""
                placeholder="eg : 12/03/2013"
              />
            </div>
          </div>
          <div>
            <p>Higher Education</p>
            <div className="single-line">
              <div>College:</div>
              <input
                required
                onChange={handleChange}
                type="text"
                placeholder="School Name"
                name="college"
              />
            </div>
            <div className="single-line">
              <div>Passout date:</div>
              <input
                required
                onChange={handleChange}
                type="datetime"
                name="college_passout"
                id=""
                placeholder="eg : 12/03/2013"
              />
            </div>
          </div>
        </div>
        <div>
          <h1>Experience</h1>
          <div>
            <div className="single-line">
              <div>Company:</div>
              <input
                onChange={handleChange}
                type="datetime"
                name="company"
                id=""
                placeholder="Company Name"
              />
            </div>
            <div className="single-line">
              <div>from:</div>
              <input
                onChange={handleChange}
                type="datetime"
                name="company_join"
                placeholder="eg : 23/01/22022"
              />
            </div>
            <div className="single-line">
              <div>to:</div>
              <input
                onChange={handleChange}
                type="datetime"
                name="company_leave"
                placeholder="eg : present or 23/01/22022"
              />
            </div>
            <div className="single-line">
              <div>Designation:</div>
              <input
                onChange={handleChange}
                type="datetime"
                name="designation"
                placeholder="Designation"
              />
            </div>
          </div>
        </div>
        <div>
          <h1>Skills</h1>
          <div>
            <div className="single-line">
              <div>Technical Skills:</div>
              <input
                onChange={handleChange}
                type="text"
                name="tech_skills"
                placeholder="eg : JavaScript,React etc"
              />
            </div>
            <div className="single-line">
              <div>Soft Skills:</div>
              <input
                required
                onChange={handleChange}
                type="text"
                name="soft_skills"
                placeholder="eg : Problem solving,hardworking etc"
              />
            </div>
          </div>
        </div>
        <div>
          <h1>Hobies</h1>
          <div>
            <div className="single-line">
              <div>Add hobies:</div>
              <input
                required
                onChange={handleChange}
                type="text"
                name="hobies"
                placeholder="eg : playing football,singing  etc"
              />
            </div>
          </div>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};
export default CustomerPage;
