import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
const ApiGithubuserData = () => {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    const getGitHubuserData = async () => {
      try {
        const allUsersData = await axios.get("https://api.github.com/users");
        //   console.log(allUsersData.data);
        setUserInfo(allUsersData.data);
      } catch (error) {
        console.log(error);
      }
    };
    getGitHubuserData();
  });
  return (
    <>
      <h3 className="text-center text-decoration-underline text-warning">
        Get Github User data from using Axios and Display in card format
      </h3>
      <Row>
        {userInfo.map((curElement) => {
          const { avatar_url, id, login, type } = curElement;
          return (
            <Col md={3} className="my-2" key={id}>
              <Card style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  className="imgGithubUser"
                  src={avatar_url}
                />
                <Card.Body>
                  <Card.Title>{login}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary" className="w-100 btn_type_user">
                    {type}
                  </Button>
                  
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default ApiGithubuserData;
