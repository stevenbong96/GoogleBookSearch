import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=lord";
// const query = "ring";

export default {
  getBooks: function() {
    return axios.get(BASEURL);
  }
};