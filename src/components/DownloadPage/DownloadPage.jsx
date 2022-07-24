import React, { useContext, useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { ResumeContext } from "../../Context/ResumeContext";
import "./DownloadPage.css";
const DownloadPage = () => {
  const { image } = useContext(ResumeContext);
  const { form } = useContext(ResumeContext);
  const [hobies, setHobies] = useState();
  const [img, setImg] = useState(null);
  const [tech_skills, setTech_skills] = useState();
  const [soft_skills, setSoft_skills] = useState();
  const contentRef = useRef();
  useEffect(() => {
    const selected = image;
    const Allowed_Types = ["image/png", "image/jpg", "image/jpeg"];
    if (selected && Allowed_Types.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImg(reader.result);
      };
      reader.readAsDataURL(selected);
    }
    if (form) {
      setHobies(form.hobies.split(","));
    }
    if (form.tech_skills) {
      setTech_skills(form.tech_skills.split(","));
    }
    if (form.soft_skills) {
      setSoft_skills(form.soft_skills.split(","));
    }
  }, [image, form]);
  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
    documentTitle: "Resume",
  });
  return (
    <div className="wholepage">
      <div>
        {form && img && (
          <div className="main" ref={contentRef}>
            <div className="contentPage">
              <div style={{ display: "flex", gap: "10px" }} className="header">
                {img && (
                  <div style={{ flex: "1.4" }} className="photo">
                    <img
                      style={{
                        width: "150px",
                        height: "180px",
                        borderRadius: "45px",
                      }}
                      src={img}
                      alt="Image"
                    />
                  </div>
                )}
                {form.name && (
                  <div
                    style={{
                      flex: "2.5",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div className="Name">{form.name}</div>
                    <div>{form.headline}</div>
                  </div>
                )}
                <div style={{ flex: "2" }} className="contacts">
                  <div>{form.email}</div>
                  <div>{form.linkedin}</div>
                  <div>{form.github}</div>
                  <div>{form.facebook}</div>
                  <div>{form.twitter}</div>
                  <div>{form.instagram}</div>
                  <div>{form.phone}</div>
                </div>
              </div>
              <div className="aboutData">
                <div>{form.about}</div>
              </div>
              <div className="body">
                <div className="left">
                  <div className="left-top">
                    <h1>Education</h1>
                    <h2>Matriculation</h2>
                    <div className="institute">{form.school}</div>
                    <div className="date">end : {form.school_passout}</div>
                    <h2>Intermediate</h2>
                    <div className="institute">{form.intermediate}</div>
                    <div className="date">
                      end : {form.intermediate_passout}
                    </div>
                    <h2>Higher Education</h2>
                    <div className="institute">{form.college}</div>
                    <div className="date">end : {form.college_passout}</div>
                  </div>
                  <div className="left-bottom">
                    <h1>Hobies</h1>
                    <div>
                      <ul>
                        {hobies.map((el) => (
                          <li>{el}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <hr></hr>
                <div className="right">
                  <div className="right-top">
                    {form.company && (
                      <div>
                        <h1>Experience</h1>
                        <h2>Company</h2>
                        <div className="institute">{form.company}</div>
                        <div className="date">Start : {form.company_join}</div>
                        <div className="date">End : {form.company_leave}</div>
                        <div>{form.designation}</div>
                      </div>
                    )}
                  </div>
                  <div className="right-bottom">
                    {tech_skills && soft_skills && (
                      <div>
                        <h1>Skills</h1>
                        <h2>Tech Skills</h2>
                        <ul>
                          {tech_skills.map((el) => (
                            <li>{el}</li>
                          ))}
                        </ul>
                        <h2>Soft Skills</h2>
                        <ul>
                          {soft_skills.map((el) => (
                            <li>{el}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="btn">
        <button onClick={handlePrint}>Download</button>
      </div>
    </div>
  );
};

export default DownloadPage;
