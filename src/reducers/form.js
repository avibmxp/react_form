const formReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_FORM":
      return state;
    case "UPDATE_QUESTION": {
      let questionIndex = state.findIndex(
        (q) => q.index === action.payload.index
      );
      // == -1 - the question is not exist yet, insert to the arr
      // < -1 - the question is exist, update the arr
      if (questionIndex > -1) {
        let question = state[questionIndex];
        question.answer = action.payload.answer;
        return [...state];
      }
      return [...state, action.payload];
    }
    default:
      return [];
  }
};
export default formReducer;
