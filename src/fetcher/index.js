import { intance } from "../config/axiosConfig";

async function getAllBooks() {
    try{
        const response = await intance.get('/books')
        return response.data

    } catch (err) {
        throw new Error(err.message.data.message || "Something went wrong")
    }
}

async function registerUser(data) {
    try {
      const response = await intance.post("/register", data);
      return response.data;
    } catch (err) {
      throw new Error(err.response.data.message || "Something went wrong");
    }
  }
  
  async function loginUser(data) {
    try {
      const response = await intance.post("/login", data);
      return response.data;
    } catch (err) {
      throw new Error(err.response.data.message || "Something went wrong");
    }
  }

  async function createNewBook(data) {
    try {
      const response = await intance.post("books", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;

    } catch (err) {
      throw new Error(err.response.data.message || "Something went wrong");
    }
  }

  async function getBookDetail(id) {
    try {
      const response = await intance.get(`/books/${id}`);
      return response;

    } catch (err) {
      throw new Error(err.response.data.message || "Something went wrong");
    }
  }

  async function deleteBookById(id) {
    try {
      const response = await intance.delete(`/books/${id}`);
      return response.data;

    } catch (err) {
      throw new Error(err.response.data.message || "Something went wrong");
    }
  }

export {getAllBooks, registerUser, loginUser, createNewBook, getBookDetail, deleteBookById};