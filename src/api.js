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
    body: params
  })
  console.log(response.json())
  return response.json()

  // try {
  //   const formData = new FormData();
  //   // Convert params to FormData
  //   Object.keys(params).forEach((key) => {
  //     if (params[key] !== null && params[key] !== undefined) {
  //       formData.append(key, params[key]);
  //     }
  //     console.log("FormData being sent:", [...formData.entries()]);
  //   });

  //   const response = await axios.post(`${api}/users`, formData, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   });

  //   console.log("Response from API:", response.data);
  //   return response.data;
  // } catch (error) {
  //   console.error("Error in signup API:", error.response?.data || error.message);
  //   alert("Signup failed. Please try again.");
  //   throw error;
  // }
};


// export const signUp = async (params) => {
//   try{
//     const response = await axios.post(`${api}/users`, params , {
//      headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });

//     console.log("Response from API:", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error in signup API:", error.response?.data || error.message);
//     alert("Signup failed. Please try again.");
//     throw error;
//   }
// }
