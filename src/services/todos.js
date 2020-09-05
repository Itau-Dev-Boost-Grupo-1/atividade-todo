import axios from "axios"

const TODOS_BASE_URL = "https://jsonplaceholder.typicode.com"

export const getUsers = async () => {
  const resp = await axios.get(`${TODOS_BASE_URL}/users`)

  return resp
}

export const getUserById = async (id = 0) => {
  if (!id) {
    console.error("[getUserById] The id is invalid.")

    return []
  }

  const resp = await axios.get(`${TODOS_BASE_URL}/users/${id}`)

  return resp
}

export const getUserTodos = async (userID = 0) => {
  if (!userID) {
    console.error("[getUserTodos] The userID is invalid.")

    return []
  }

  const resp = await axios.get(`${TODOS_BASE_URL}/users/${userID}/todos`)

  return resp
}

