import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import "./mystyle.css";

const ApiJsonParactice = () => {
  const [apiDataArray, setApiDataArray] = useState([]);

  useEffect(() => {
    const getAPIdata = async () => {
      const Apidata = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      //   console.log(Apidata.data);
      //we only want data(information) so will use ApiData.data
      setApiDataArray(Apidata.data);
    };
    getAPIdata();
    // console.log(apiDataArray);
  });

  return (
    <>
      <div className="dataWrraper">
        <h3 className="text-center text-decoration-underline text-success">
          Get Api data using Axios and Display in Table Format
        </h3>

        {/* using react-bootstarp table for display data */}
        <div className="table_warapper">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {/* fetching All the data with map functions */}

              {/* using Destructuring so we can use simple name instead of curElemet.id,curElement.title  */}

              {apiDataArray.map((curElement) => {
                const { id, userId, title, body } = curElement;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{userId}</td>
                    <td>{title}</td>
                    <td>{body}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default ApiJsonParactice;
