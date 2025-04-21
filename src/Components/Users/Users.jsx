import React from "react";
import { useLoaderData } from "react-router";
import User from "../User/User";

const Users = () => {
    const usertyle = {
        display: "flex",
        flexWrap: "wrap"
    }
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h1>User page 1</h1>
      <div style={usertyle}>
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
      </div>
    </div>
  );
};

export default Users;
