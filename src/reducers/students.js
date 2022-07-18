import { SET_FAVORITE, SET_STUDENTS } from "../actions/types";

const initialState = {
  students: [],
};

export const studentsReducer = (state= initialState, action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return {... state, students: action.payload };

      case SET_FAVORITE:
        const newStudentsList = [...state.students];
        const currentStudentsIndex = newStudentsList.findIndex((student) => {
          return student.id===action.payload.studentId;});
        if (currentStudentsIndex < 0) {
          return state;
        }
        newStudentsList[currentStudentsIndex].favorite = !newStudentsList[currentStudentsIndex].favorite;
      return{...state,Students:newStudentsList}
    default:
      return state;
  }
}