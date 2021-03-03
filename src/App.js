import React, { useState } from "react";
import FormInput from "./FormInput";
import FormSuccess from "./FormSuccess";
function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitForm = () => {
    setIsSubmitted(true);
  };

  const refreshForm = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      <div className="form-container">
        {/* <span className="close-btn">x</span> */}
        <button className="close-btn" onClick={refreshForm}>
          x
        </button>
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
