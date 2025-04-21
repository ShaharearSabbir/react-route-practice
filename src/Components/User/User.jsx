import React, { Suspense, useState } from "react";
import { Link, useNavigate } from "react-router";
import UserDetails2 from "../UserDetails2/UserDetails2";

const User = ({ user }) => {
  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${user.id}`
  ).then(res=> res.json())
  const [showInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/users/${id}`);
  };
  const userstyle = {
    border: "2px solid red",
    padding: "10px",
    margin: "10px",
    borderRadius: "20px",
  };
  return (
    <div style={userstyle}>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <Link to={`/users/${user.id}`}>Show Details</Link>
      <button onClick={() => handleClick(user.id)}> Detail Via Button</button>
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "Hide" : "Show"} info
      </button>
      {showInfo && (
        <Suspense fallback={<span>Loading...</span>}>
          <UserDetails2 userPromise={userPromise}></UserDetails2>
        </Suspense>
      )}
    </div>
  );
};

export default User;
