import { useDispatch } from "react-redux";
import { updateQuestion } from "../actions";
import { Form } from "react-bootstrap";

function CheckboxField({ label, index }) {
  const dispatch = useDispatch();

  function getAnswer(e) {
    let obj = {
      index: index,
      label: label,
      answer: e.currentTarget.checked,
    };
    dispatch(updateQuestion(obj));
  }

  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          label={label}
          onChange={(e) => getAnswer(e)}
        />
      </Form.Group>
    </div>
  );
}
export default CheckboxField;
