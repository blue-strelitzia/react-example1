import axios from "axios";

const BASE_URL = "http://localhost:8080";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getTodosIds = async () => {
  return (await axiosInstance.get("todos")).data.map((todo) => todo.id);
};

export const getTodo = async (id) => {
  return (await axiosInstance.get(`todos/${id}`)).data;
};

export const createTodo = async (data) => {
  await axiosInstance.post("todos", data);
};

export const updateTodo = async (data) => {
  await axiosInstance.put(`todos/${data.id}`, data);
};

export const deleteTodo = async (id) => {
  await axiosInstance.delete(`todos/${id}`);
};