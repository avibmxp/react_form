import { useDispatch } from "react-redux";
import { updateQuestion } from "../actions";
import { Form } from "react-bootstrap";
import "../styles/selectField.css";

function SelectField({ label, options, index }) {
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
        <Form.Select onChange={(e) => getAnswer(e)}>
          {options &&
            options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
        </Form.Select>
      </Form.Group>
    </div>
  );
}
export default SelectField;
