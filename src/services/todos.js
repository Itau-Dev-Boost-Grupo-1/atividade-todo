import axios from "axios"
import { queryAllByDisplayValue } from "@testing-library/react"

const TODOS_BASE_URL = "https://jsonplaceholder.typicode.com"

export const getUsers = async () => {
  return axios.get(`${TODOS_BASE_URL}/users`)
}

export const getUserById = async (id = 0) => {
  if (!id) {
    console.error("[getUserById] The id is invalid.")

    return []
  }
  
  return axios.get(`${TODOS_BASE_URL}/users/${id}`)
}

export const getUserTodos = async (userID = 0) => {
  if (!userID) {
    console.error("[getUserTodos] The userID is invalid.")

    return []
  }

  return axios.get(`${TODOS_BASE_URL}/users/${userID}/todos`)
}

