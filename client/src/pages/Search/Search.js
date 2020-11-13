import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import "./search.css";
import SearchResult from "./SearchResult";

function Search() {
    // Set the hook state
    const [searchBookState, setSearchBookState] = useState({
        search: ""
    });

    useEffect(() => {
        loadBookInfo()
    }, [])

    function loadBookInfo() {
        API.getBooks()
            .then(res => {
                // console.log(res.data.items);
                setSearchBookState(res.data.items);
            })
            .catch(err => {
                console.log(err);
            })
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setSearchBookState({
            ...searchBookState,
            [name]: value
        })
    }

    // function handleFormSubmit (event) {
    //     event.preventDefault();
    // }

    // Render
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <form>
                        <h1>Search for Books!</h1>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Name of Books</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary buttonStyle">Search</button>
                    </form>
                </div>
            </div>

            <br />

            <div className="row">
                <div className="col-sm-12">
                    <h3>Result</h3>
                    {searchBookState.map(bookObj => {
                        // console.log(bookObj);
                        return <SearchResult title={bookObj.volumeInfo.title} author={bookObj.volumeInfo.authors[0]} image={bookObj.volumeInfo.imageLinks.thumbnail} description={bookObj.volumeInfo.description}/>
                    })}
                    {/* info={bookObj.searchInfo.textSnippet}  */}
                </div>
            </div>

            <br />
            <br />
            <br />
        </div>
    )
}

export default Search