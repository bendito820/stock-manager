import axios from "axios";

const client = axios.create({
  baseURL: "http://192.168.1.241:3030/v1",
  // baseURL: "http://192.168.1.240:3030/v1",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export { client };
