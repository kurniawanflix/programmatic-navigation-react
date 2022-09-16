import axios from "axios";
import { API } from "../../config";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const HomePage = () => {
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await axios.get(`${API}`);
        console.log(data);
        setComments(data);
      } catch (e) {
        //
      }
    };
    getComments();
  }, []);
  return (
    <Container>
      <h1 className="m-4">Programmatic Navigation React Javascript</h1>
      {comments?.map((comment) => (
        <Card className="m-2">
          <Card.Header>{comment.id}</Card.Header>
          <Card.Body>
            <Card.Text>Username : {comment.name}</Card.Text>
            <Card.Text>Email : {comment.email}</Card.Text>
            <Button variant="primary" onClick={() => navigate(`${comment.id}`)}>
              Show Comment
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default HomePage;
