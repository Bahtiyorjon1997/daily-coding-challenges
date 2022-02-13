import React from "react";

const Book = ({ title, id, img, author }) => {
  // const { title, author, img, id } = props;
  const clickHandler = (btn, id) => {
    alert("Btn Pushed");
  };

  console.log(id);
  return (
    <section className="book">
      <Image />
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={(btn, id) => clickHandler(btn, id)}>
        Click
      </button>
    </section>
  );
};

const Image = () => {
  return <img src="" alt="" />;
};

export default Book;
