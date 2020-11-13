import React from "react";
import "./save.css";

function Saved(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h3>Save History</h3>
                    <div className="row resultStyle">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-3">
                                    <h4>Title of Books</h4>
                                </div>

                                <div className="col-sm-3">
                                    
                                </div>

                                <div className="col-sm-3">
                                    
                                </div>

                                <div className="col-sm-3 d-flex justify-content-around">
                                    <button type="submit">View</button>
                                    <button type="submit">Delete</button>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <h6>Name of Books</h6>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <h6>Written by: (Author Name)</h6>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-3">
                                    <p>Picture Here</p>
                                </div>

                                <div className="col-sm-9">
                                    <p>Book Description</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Saved