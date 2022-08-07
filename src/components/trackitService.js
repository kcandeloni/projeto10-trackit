import axios from "axios";

const BASE_URL =
  "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

  function setToken({token, image, name}, setUser) {
  const timestamp = +new Date();
  localStorage.setItem("trackit", JSON.stringify({token, image, timestamp}));

  setUser({token, image, name})
}  

function getToken() {
  const auth = JSON.parse(localStorage.getItem("trackit"))
  console.log(auth);
  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`
    }
  };

  return config;
}

function singUp(body) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
  return promise;
}

function login(body) {
    const promise = axios.post(`${BASE_URL}/auth/login`, body);
    return promise;
}

function create(body) {
  const config = getToken();
  const promise = axios.post(`${BASE_URL}/habits`, body, config);
  return promise;
}

function getHabits() {
  const config = getToken();
  const promise = axios.get(`${BASE_URL}/habits`, config);
  return promise;
}

function deleteHabits(id) {
  const config = getToken();
  console.log(id)
  const promise = axios.delete(`${BASE_URL}/habits/${id}`, config);
  return promise;
}

function getToday() {
  const config = getToken();
  const promise = axios.get(`${BASE_URL}/habits/today`, config);
  return promise;
}

function checkHabit(id, op_url) {
  const config = getToken();
  console.log(config)
  const promise = axios.post(`${BASE_URL}/habits/${id}/${op_url}`, {}, config);
  return promise;
}

export { singUp, create, setToken,
  getToken, login, getHabits,
  deleteHabits, getToday, checkHabit};
