import React from "react";
import { useHistory } from "react-router";

const UserPost = () => {
  let history = useHistory();
  const [title, setUsername] = React.useState("");
  const [classification, setClassification] = React.useState("");
  const [rating, setRating] = React.useState("");
  const [price, setPrice] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:3000/api/v1/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        classification,
        rating,
        price,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json;
      })
      .then((json) => {
        console.log(json);
        return json;
      })
      .then(() => {
        history.push("/Read");
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type="text"
        placeholder="classification"
        value={classification}
        onChange={({ target }) => setClassification(target.value)}
      />
      <input
        type="text"
        placeholder="rating"
        value={rating}
        onChange={({ target }) => setRating(target.value)}
      />
      <input
        type="text"
        placeholder="price"
        value={price}
        onChange={({ target }) => setPrice(target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

export default UserPost;
