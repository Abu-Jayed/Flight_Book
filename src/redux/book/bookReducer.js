import { BOOK, DELETE } from "./actionType";

const initialState = [];
const bookReducer = (state = initialState, action) => {
  const coppidedState = [...state];
  const { type, payload, id } = action;

  switch (type) {
    case BOOK:
      // add book
      const lastBookId = coppidedState[coppidedState.length - 1]?.id;
      const newBook = { ...payload, id: lastBookId ? lastBookId + 1 : 1 };
      coppidedState.push(newBook);
      return coppidedState;
    case DELETE:
      const updatedState = coppidedState.filter((item) => item.id !== id);
      return updatedState;
    default:
      return state;
  }
};

export default bookReducer
