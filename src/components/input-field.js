import React from "react";
import { useDispatch } from "react-redux";
import { updateQuestion } from "../actions";
import { Form } from "react-bootstrap";

function InputField({ label, type, index }) {
  const dispatch = useDispatch();

  function getAnswer(e) {
    let obj = {
      index: index,
      label: label,
      answer: e.target.value,
    };
    dispatch(updateQuestion(obj));
  }

  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control onChange={(e) => getAnswer(e)} type={type} />
      </Form.Group>
    </div>
  );
}
export default InputField;
