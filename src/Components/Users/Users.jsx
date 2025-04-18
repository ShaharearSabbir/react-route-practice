import React from "react";
import { useLoaderData } from "react-router";

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
        <h1>User page 1</h1>
      {
        users.map(user=><p>{user.name}</p>)
      }
    </div>
  );
};

export default Users;
