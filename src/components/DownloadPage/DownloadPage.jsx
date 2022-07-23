import React, { useContext, useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { ResumeContext } from "../../Context/ResumeContext";
import "./DownloadPage.css";
const DownloadPage = () => {
  const { image } = useContext(ResumeContext);
  const { form } = useContext(ResumeContext);
  const [img, setImg] = useState(null);
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
                    className="Name"
                  >
                    <div style={{ fontSize: "28px", fontWeight: "bold" }}>
                      {form.name}
                    </div>
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
                <h2>Matriculation</h2>
                <div className="institute">{form.school}</div>
                <div>end : {form.school_passout}</div>
                <h2>Intermediate</h2>
                <div className="institute">{form.intermediate}</div>
                <div>end : {form.intermediate_passout}</div>
                <h2>Higher Education</h2>
                <div className="institute">{form.college}</div>
                <div>end : {form.college_passout}</div>
              </div>
              <div className="body">
                <h2>Matriculation</h2>
                <div className="institute">{form.school}</div>
                <div>end : {form.school_passout}</div>
                <h2>Intermediate</h2>
                <div className="institute">{form.intermediate}</div>
                <div>end : {form.intermediate_passout}</div>
                <h2>Higher Education</h2>
                <div className="institute">{form.college}</div>
                <div>end : {form.college_passout}</div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <button onClick={handlePrint}>Download</button>
      </div>
    </div>
  );
};

export default DownloadPage;
