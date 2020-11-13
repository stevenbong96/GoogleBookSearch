import axios from "axios";

// const query = "ring";

export default {
  getBooks: function(query) {
    const BASEURL = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
    return axios.get(BASEURL);
  },
  // saveBook: function(){
  //   return axios.post("/api/books");
  // },
  // deleteBook: function(id){
  //   return axios.delete("/api/books/" + id);
  // }
};