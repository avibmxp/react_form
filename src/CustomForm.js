import React from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/form.css";
import InputField from "./components/input-field";
import SelectField from "./components/select-field";
import CheckboxField from "./components/checkbox-field";
import { Button } from "react-bootstrap";

function CustomForm({ formStracture }) {
  const questionForm = useSelector((state) => state.form);

  // Parsing the structer as a string to an object
  let form = {};
  try {
    form = JSON.parse(formStracture);
  } catch (ex) {
    console.log(ex);
  }

  // Mapping the components
  const ComponentsMaping = {
    input: InputField,
    select: SelectField,
    checkbox: CheckboxField,
  };

  function Submit() {
    // After click submit we send the question to the server with ajax
    console.log(questionForm);
  }

  return (
    <div className="container">
      <div className="from-wrapper">
        <img
          className="logo"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/he/thumb/2/29/Rafael-2.svg/1280px-Rafael-2.svg.png"
        />
        <h2>Job Application</h2>
      </div>
      <div className="questions-wrapper">
        {form.inputs &&
          form.inputs.map((input, index) => (
            <div key={index} className="field">
              {React.createElement(ComponentsMaping[input.name], {
                ...input,
                index,
              })}
            </div>
          ))}
      </div>
      <Button
        className="submit"
        variant="primary"
        type="submit"
        onClick={() => Submit()}
      >
        Submit
      </Button>
    </div>
  );
}
export default CustomForm;
