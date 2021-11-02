import React from "react";
import { useEffect, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";

export default function Update() {
  let history = useHistory();
  const [title, setTitle] = useState("");
  const [classification, setClassification] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [id, setID] = useState(null);

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setTitle(localStorage.getItem("First Name"));
    setClassification(localStorage.getItem("Last Name"));
    setRating(localStorage.getItem("Rating"));
    setPrice(localStorage.getItem("Price"));
  }, []);

  const updateAPIData = () => {
    axios
      .put(`http://localhost:3000/api/v1/products/${id}`, {
        title,
        classification,
        rating,
        price,
      })
      .then(() => {
        history.push("/Read");
      });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Title</label>
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Classification</label>
          <input
            placeholder="Classification"
            value={classification}
            onChange={(e) => setClassification(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Rating</label>
          <input
            placeholder="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Price</label>
          <input
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" onClick={updateAPIData}>
          Update
        </Button>
      </Form>
    </div>
  );
}
