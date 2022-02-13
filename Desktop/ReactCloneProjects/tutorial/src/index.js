import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Book from "./Book";
import { books } from "./books";

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
