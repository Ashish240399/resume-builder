import { createContext, useState } from "react";

export const ResumeContext = createContext();
export const ResumeContextProvider = ({ children }) => {
  const [form, setForm] = useState();
  const [image, setImage] = useState(null);
  const takeData = (form, img) => {
    setForm(form);
    setImage(img);
  };
  console.log(form, image);
  return (
    <ResumeContext.Provider value={{ form, image, takeData }}>
      {children}
    </ResumeContext.Provider>
  );
};
