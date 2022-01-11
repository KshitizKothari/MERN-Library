import React, { useState } from "react";

const NewBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit= (e) =>{
      e.preventDefault();
    const book = {title, author, price, genre}
    fetch('/book',{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(book)
    }).then(() =>{
        console.log("new book added");
    })
    console.log(book);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group ">
        <h2>Create new book</h2>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="booktitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
       
      </div>
      <div className="form-group mt-3">
        <label htmlFor="exampleInputPassword1">Author</label>
        <input
          type="text"
          className="form-control"
          id="bookauthor"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="form-group mt-3">
        <label htmlFor="exampleInputPassword1">Price</label>
        <input
          type="text"
          className="form-control"
          id="bookprice"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="form-group mt-3">
        <label htmlFor="exampleInputPassword1">Genre</label>
        <input
          type="text"
          className="form-control"
          id="bookgenre"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <div className="form-group form-check"></div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default NewBook;
