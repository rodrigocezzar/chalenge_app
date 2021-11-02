import React from "react";
import { Table } from "semantic-ui-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { useHistory } from "react-router";

export default function Read() {
  let history = useHistory();
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/products").then((response) => {
      setAPIData(response.data);
    });
  }, []);

  const setData = (data) => {
    let { id, title, classification, rating, price, created_at } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Title", title);
    localStorage.setItem("Classification", classification);
    localStorage.setItem("Rating", rating);
    localStorage.setItem("Price", price);
    localStorage.setItem("Created", created_at);
  };

  const onDelete = (id) => {
    axios.delete(`http://localhost:3000/api/v1/products/${id}`).then(() => {
      history.push("/Read");
    });
  };

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Classification</Table.HeaderCell>
            <Table.HeaderCell>Rating</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Created</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.title}</Table.Cell>
                <Table.Cell>{data.classification}</Table.Cell>
                <Table.Cell>{data.rating}</Table.Cell>
                <Table.Cell>R$ {data.price}</Table.Cell>
                <Table.Cell>{data.created_at}</Table.Cell>
                <Link to="/Update">
                  <Table.Cell>
                    <Button onClick={() => setData(data)}>Update</Button>
                  </Table.Cell>
                  <Table.Cell>
                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                  </Table.Cell>
                </Link>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
