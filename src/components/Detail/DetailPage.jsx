import axios from "axios";
import { API } from "../../config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const DetailPage = () => {
  const [comment, setComment] = useState();
  const params = useParams();
  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await axios.get(`${API}/${params?.id}`);
        setComment(data);
      } catch (e) {
        //
      }
    };
    getComments();
  });
  return (
    <Container>
      <h2 className="m-5">Comment Detail</h2>
      <Card>
        <Card.Header>Comment</Card.Header>
        <Card.Body className="text-start">
          <Card.Text>Username : {comment?.name}</Card.Text>
          <Card.Text>Email : {comment?.email}</Card.Text>
          <hr />
          <Card.Text className="text-center">
            Comment : {comment?.body}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DetailPage;
