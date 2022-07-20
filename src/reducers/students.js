import { SET_FAVORITE, SET_STUDENTS } from "../actions/types";

const initialState = {
  students: [],
};

export const studentsReducer = (state= initialState, action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return {...state, students: action.payload };

      case SET_FAVORITE:
        return {
          ...state,
          myList : [...state.myList, action.payload]
        }
    default:
      return state;
  }
}