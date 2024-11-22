import axios from "axios";
const api = process.env.REACT_APP_API_BASE_URL;

export const requestAllProducts = async (url = null) => {
  const endpoint = url || `${api}/products`;
  const response = await axios.get(endpoint);
  return response.data;
};

export const requestSingleProduct = async (id) => {
  const response = await axios.get(`${api}/products/${id}`);
  return response.data.data;
};

export const searchProducts = async (params) => {
  const response = await axios.get(`${api}/products/search?keyword=${params}`);
  return response.data.result;
};


export const signUp = async (params) => {
  const response = await fetch(`${api}/users`, {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params)
  })
  const data = await response.json()
  // console.log('response from api',data)
  return data
};

export const signIn = async (params) => {
  const response = await fetch(`${api}/users/sign_in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
  const data = await response.json();
  return data;
};