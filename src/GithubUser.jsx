import React, { useState, useEffect } from "react";

const githubUrl = "https://api.github.com/users/gejjeg";

export function GithubUser() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getGithubUser();
  }, []);

  const getGithubUser = async () => {
    const response = await fetch(githubUrl);
    const jsonData = await response.json();
    setUserData(jsonData);
  };
  
  return (
    <div>
      <h2>GitHub User Data</h2>
    <div className="user-container">
      <h5 className="info-item">{userData.name}</h5>
    </div>
  </div>
  );
}