import { SET_STUDENTS } from "../actions/types";

const initialState = {
  students: [],
};

export const studentsReducer = (state= initialState, action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return {... state, students: action.payload };
    default:
      return state;
  }
}