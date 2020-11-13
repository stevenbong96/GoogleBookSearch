import React from "react";
import "./search.css";

function SearchResult(props) {
    return (
        <div className="row resultStyle">
            <div className="col-sm-12">
                <div className="row">
                    <div className="col-sm-9">
                        <h4>{props.title}</h4>
                    </div>

                    <div className="col-sm-3 d-flex justify-content-around">
                        <button type="submit">View</button>
                        <button type="submit" onClick={props.save}>Save</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        {/* <h6>{props.info}</h6> */}
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <h6>Written by: {props.author}</h6>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-3">
                        <img src={props.image} alt="thumbnail" />
                    </div>

                    <div className="col-sm-9">
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult