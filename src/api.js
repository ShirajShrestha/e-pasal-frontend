import axios from "axios";
import Cookies from "js-cookie";
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

export const fetchReviews = async (id) => {
  const response = await axios.post(`${api}/products/${id}/comments`, {
    // content: comment,
    // user_id: userId,
  });
  return response.data
}

export const signUp = async (params) => {
  try {
    const response = await axios.post(`${api}/users`, params)
    return response.data
  } catch (error) {
    console.error("Error during sign up:", error);
    throw error.response?.data || error.message;
  }
}

export const signIn = async (params) => {
  try{
    const response = await axios.post(`${api}/users/sign_in`, params, 
  )
  return response.data
}catch(error){
  console.error("Error during sign in:", error);
  throw error.response?.data || error.message;
  }
}

export const signOut = async () => {
  Cookies.remove("user_data");
};

export const postOrder = async (orderData, userId) => {
  const response = await axios.post(`${api}/users/${userId}/orders`, {
    order_products: orderData,
  });
  return response;
};

export const fetchAllOrders = async (userId) => {
  const response = await axios.get(`${api}/users/${userId}/orders`);
  return response.data;
};
