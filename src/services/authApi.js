import axios from "axios";
const API_KEY = "AIzaSyDVLOCqtFFYNPnZf9wQcOdX_9Z01z-gUic";

const registrUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

const loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

export const registration = async (user) => {
  try {
    const response = await axios.post(registrUrl, {
      ...user,
      returnSecureToken: true,
    });
    return response.data;
  } catch (error) {
    console.dir(error);
  }
};

export const login = async (user) => {
  try {
    const response = await axios.post(loginUrl, {
      ...user,
      returnSecureToken: true,
    });

    return response.data;
  } catch (error) {}
};
