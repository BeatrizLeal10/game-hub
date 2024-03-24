import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f9a6bc9b985a40319ed7cbcc0cf546bd",
  },
});
