import React, { useState } from "react";

export const Serach = () => {
  const [serachName, setSerachName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={serachName}
        onChange={(e) => setSerachName(e.target.value)}
      ></input>
    </div>
  );
};
