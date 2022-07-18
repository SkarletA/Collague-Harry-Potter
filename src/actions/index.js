import { SET_FAVORITE, SET_STUDENTS } from "./types"

export const setStudents = (payload) => ({
  type: SET_STUDENTS,
  payload,
});

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});