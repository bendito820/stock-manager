import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3030/v1",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export { client };
