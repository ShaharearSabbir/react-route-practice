import React, { use } from "react";

const UserDetails = ({userPromise}) => {
  const user = use(userPromise);
  const { name, username } = user;
  console.log(user);
  return (
    <div>
        <h3>UserDetails</h3>
      <p>{name}</p>
      <p>{username}</p>
    </div>
  );
};

export default UserDetails;
