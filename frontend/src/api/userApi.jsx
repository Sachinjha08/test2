import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

export const getUsers = (status) =>
  axios.get(`${API_URL}?status=${status || ""}`);
export const getUserById = (id) => axios.get(`${API_URL}/${id}`);
export const createUser = (user) => axios.post(API_URL, user);
export const updateUser = (id, user) => axios.patch(`${API_URL}/${id}`, user);
export const deleteUser = (id) => axios.delete(`${API_URL}/${id}`);
