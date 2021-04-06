import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-react-burger-9b8e2-default-rtdb.firebaseio.com/",
});

export default instance;
