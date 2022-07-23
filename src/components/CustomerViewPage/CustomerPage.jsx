import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ResumeContext } from "../../Context/ResumeContext";
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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Personal Details</h1>
          Name:
          <input
            required
            onChange={handleChange}
            type="text"
            placeholder="Enter Name"
            name="name"
          />
          HeadLine:
          <input
            required
            onChange={handleChange}
            type="text"
            placeholder="Enter Headline"
            name="headline"
          />
          About:
          <textarea
            required
            onChange={handleChange}
            type="text"
            placeholder="About"
            name="about"
          />
          Photo:
          <input
            required
            onChange={(e) => handleImage(e)}
            type="file"
            name="photo"
          />
        </div>
        <div>
          <h1>Contact Info</h1>
          Email:
          <input
            required
            onChange={handleChange}
            type="text"
            placeholder="Email Address"
            name="email"
          />
          Facebook:
          <input
            required
            onChange={handleChange}
            type="text"
            placeholder="Facebook Account"
            name="facebook"
          />
          Twitter:
          <input
            required
            onChange={handleChange}
            type="text"
            placeholder="Twitter Account"
            name="twitter"
          />
          Instagram:
          <input
            required
            onChange={handleChange}
            type="text"
            placeholder="Instagram Account"
            name="instagram"
          />
          LinkedIn:
          <input
            required
            onChange={handleChange}
            type="text"
            placeholder="LinkedIn Account"
            name="linkedin"
          />
          Github:
          <input
            required
            onChange={handleChange}
            type="text"
            placeholder="Github Account"
            name="github"
          />
          Mobile:
          <input
            required
            onChange={handleChange}
            type="text"
            placeholder="Whatsapp Number"
            name="mobile"
          />
        </div>
        <div>
          <h1>Education Details</h1>
          <div>
            <p>Matriculation</p>
            School:
            <input
              required
              onChange={handleChange}
              type="text"
              placeholder="School Name"
              name="school"
            />
            Passout date:
            <input
              required
              onChange={handleChange}
              type="datetime"
              name="school_passout"
              id=""
              placeholder="eg : 12/03/2013"
            />
          </div>
          <div>
            <p>Intermediate</p>
            College:
            <input
              required
              onChange={handleChange}
              type="text"
              placeholder="School Name"
              name="intermediate"
            />
            Passout date:
            <input
              required
              onChange={handleChange}
              type="datetime"
              name="intermediate_passout"
              id=""
              placeholder="eg : 24/10/2016"
            />
          </div>
          <div>
            <p>Higher Education</p>
            College:
            <input
              required
              onChange={handleChange}
              type="text"
              placeholder="School Name"
              name="college"
            />
            Passout date:
            <input
              required
              onChange={handleChange}
              type="datetime"
              name="college_passout"
              id=""
              placeholder="eg : present or 23/01/22022"
            />
          </div>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default CustomerPage;
