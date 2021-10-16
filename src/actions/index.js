export const getForm = () => {
  return {
    type: "GET_FORM",
  };
};

export const updateQuestion = (question) => {
  return {
    type: "UPDATE_QUESTION",
    payload: question,
  };
};
