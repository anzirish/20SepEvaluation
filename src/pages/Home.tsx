import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [owner, setOwner] = useState<string>("");
  const [repoName, setRepoName] = useState<string>("");
  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!owner.trim() || !repoName.trim()) return;
    navigate(`/repo/${owner}/${repoName}`);
  };

  return (
    <>
      <h1>Issue tracker</h1>
      <form
        onSubmit={submitHandler}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <input
          type="text"
          placeholder="Enter owner name"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter repo name"
          value={repoName}
          onChange={(e) => setRepoName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Home;
