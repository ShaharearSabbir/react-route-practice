import React, { use } from "react";

const Users2 = ({ usersPromise }) => {
  const users = use(usersPromise);
  console.log(users);
  return (
    <div>
      <h1>User page 2</h1>
      {users.map((user) => (
        <p>{user.name}</p>
      ))}
    </div>
  );
};

export default Users2;
