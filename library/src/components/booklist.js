import React, { Component } from "react";
import Book from './book';

export default function bookList({bookList}) {
    console.log(bookList);
  return (
    bookList.map((book)=>{
        
        return <Book book={book} key={book._id}/>
    })
  );
}
