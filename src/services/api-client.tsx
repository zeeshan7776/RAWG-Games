import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "55546c3859b64268bccd2033ff8731d7",
  },
});
