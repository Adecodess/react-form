import React, { useState } from "react";
import FormInput from "./FormInput";
import FormSuccess from "./FormSuccess";
function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitForm = () => {
    setIsSubmitted(true);
  };

  return (
    <>
      <div className="form-container">
        <span className="close-btn">x</span>
        <div className="form-content-left">
          <img src="img/img-2.svg" alt="spaceship" className="form-img" />
        </div>
        {!isSubmitted ? <FormInput submitForm={submitForm} /> : <FormSuccess />}
        {/* <FormSuccess /> */}
      </div>
    </>
  );
}

export default App;
