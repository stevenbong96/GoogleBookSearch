import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import "./search.css";
import SearchResult from "./SearchResult";

function Search() {
    // Set the hook state
    const [searchBookState, setSearchBookState] = useState({
        search: "",
    });
    const [currentSearch, setCurrentSearch] = useState([])

    useEffect(() => {
        // loadBookInfo()
    }, [])

    function loadBookInfo() {
        API.getBooks("harry")
            .then(res => {
                // console.log(res.data.items);
                setCurrentSearch(res.data.items);
            })
            .catch(err => {
                console.log(err);
            })
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setSearchBookState({ [name]: value })
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        // console.log(searchBookState.search)
        API.getBooks(searchBookState.search)
            .then(res => {
                setCurrentSearch(res.data.items)
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    // SAVE specific book
    function handleSave(id) {
        // event.preventDefault();
        let [bookHistory] = currentSearch.filter(savedBook => id === savedBook.id)
        console.log(id);
        console.log(bookHistory);
        // API.saveBook(bookHistory)
        // .then(res => {
        //     console.log(res);
        // })
        // .catch(err => {
        //     console.log(err);
        // })
    }

    // DELETE specific book
    function handleDelete(id) {
        API.deleteBook(id)
        .then(res => {
            console.log(res);
            // window.location.reload();
        })
        .catch(err => {
            console.log(err);
        })
    }

    // Render
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <form>
                        <h1>Search for Books!</h1>
                        <div className="form-group">
                            <label for="bookName">Name of Books</label>
                            <input type="text" name="search" className="form-control" id="bookName" aria-describedby="emailHelp"
                                onChange={handleInputChange}
                            />
                        </div>
                        <button role="button" onClick={handleFormSubmit} className="btn btn-primary buttonStyle">Search</button>
                    </form>
                </div>
            </div>

            <br />
            <div>
                {currentSearch.length ? (
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>Result</h3>
                            {currentSearch.map(bookObj => {
                                // console.log(bookObj);
                                return (
                                    <div>
                                        <SearchResult save={handleSave} id={bookObj.id} title={bookObj.volumeInfo.title} author={bookObj.volumeInfo.authors[0]} image={bookObj.volumeInfo.imageLinks.thumbnail} description={bookObj.volumeInfo.description} link={bookObj.volumeInfo.infoLink}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ) : (
                        <h3 className="text-center">Seach for some Books!</h3>
                    )}
            </div>

            <br />
            <br />
            <br />
        </div>
    )
}

export default Search