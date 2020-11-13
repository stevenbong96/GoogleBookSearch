import React from "react";
import "./search.css"
function Search() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <form>
                        <h1>Search for Books!</h1>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Name of Books</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <button type="submit" className="btn btn-primary buttonStyle">Submit</button>
                    </form>
                </div>
            </div>

            <br />

            <div className="row">
                <div className="col-sm-12">
                    <h3>Result</h3>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-3">
                                    <h4>Title of Books</h4>
                                </div>

                                <div className="col-sm-3">
                                    
                                </div>

                                <div className="col-sm-3">
                                    
                                </div>

                                <div className="col-sm-3">
                                    <button type="submit">View</button>
                                    <button type="submit">Save</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search