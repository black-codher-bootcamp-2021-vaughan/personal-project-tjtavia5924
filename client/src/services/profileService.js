// You can create all the fetches to your own APIs and externals APIs here
// This example fetch is specifically for our Profile API and is why the file is called profileService.js
import axios from "axios";

const getAllProfiles = async () => {
  const response = await axios.get(`/api/profile`);

  return response.data || [];
};

const getProfile = async (id) => {
  const response = await axios.get(`/api/profile/`+ id);
  return response.data || [];
}

const postProfile = async (user) => {
  const response = await axios.post(`/api/profile/`,user);
  return response.data || [];
}


const deleteProfile = async (id) => {
  const response = await axios.delete(`/api/profile/` + id);
  return response.data || [];
}

const updateProfile = async (id, update) => {
  const response = await axios.put(`/api/profile/` + id, update);
  console.log('This is response', response)
  return response.data;
}




// All of the endpoints in this file can be exported below
export { getAllProfiles, getProfile, postProfile, updateProfile, deleteProfile};
