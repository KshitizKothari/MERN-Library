import React from "react";
import { Link } from 'react-router-dom';

const Book = (props) => {
  return (
    <div class="col-sm-4">

      <div className="card mt-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{props.book.title}</h5>
          <p className="card-text">
            <p>Author - {props.book.author}</p>
            <p>Price - {props.book.price}</p>
            <p>Genre - {props.book.genre}</p>
          </p>
          <Link to={`/book/update/${props.book._id}`} >
          <a href="" className="btn btn-primary">
            Update
          </a>
          </Link>
        </div>
      </div>
   </div>
  );
};

export default Book;
