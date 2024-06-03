import axios from "axios";

const client = axios.create({
  baseURL: "http://192.168.0.18:3030/v1",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export { client };