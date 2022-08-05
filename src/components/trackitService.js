import axios from "axios";

const BASE_URL =
  "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth";

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
  const promise = axios.post(`${BASE_URL}/sign-up`, body);
  return promise;
}

function login(body) {
    const promise = axios.post(`${BASE_URL}/login`, body);
    return promise;
}

function create(body) {
  const config = getToken();
  const promise = axios.post(`${BASE_URL}/habits`, body, config);
  return promise;
}

export { singUp, create, setToken, getToken, login};
