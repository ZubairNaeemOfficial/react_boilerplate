import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/context";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  // const {user}=useContext(UserContext)
  const [users, setUsers] = React.useState([]);
  let AllUsersData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
  };
  useEffect(() => {
    AllUsersData();
  }, []);
  return (
    <div>
      {users &&
        users.map((user, index) => {
          return (
            <div key={index}>
              <Link to={`/user/${user.id}`}>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
