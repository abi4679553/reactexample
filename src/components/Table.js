import React, { useState } from "react";

const Table = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !age) return;

    setData([...data, { name, age }]);
    setName("");
    setAge("");
  };

  return (
    <div>
      <h2>Form to Table</h2>

      <form  onSubmit={handleSubmit}>
        <input className=" border-2 border-solid"
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
