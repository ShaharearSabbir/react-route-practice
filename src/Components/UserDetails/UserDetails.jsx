import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const UserDetails = () => {
    const navigate = useNavigate()
    const user = useLoaderData()
  return (
    <div>
        <h3>User Details Here</h3>
        <h5>{user.name}</h5>
        <p>Website: {user.website}</p>
        <button onClick={()=> navigate(-1)}>Go Back</button>
    </div>
  );
};

export default UserDetails;
