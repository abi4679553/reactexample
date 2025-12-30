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
      <h1 className="text-2xl text-blue-700 m-3 text-center ">Hello fill  the form </h1>
      <h2 className=" text-xl p-3 text-center ">Form to Table</h2>


      <form onSubmit={handleSubmit}>
        <input className=" border-2 border-solid m-3 " type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />

        <input className="m-3 border-2 border-solid" type="number" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} />

        <button className="text-xl text-white bg- bg-pink-600 p-2 m-3 " type="submit">Submit</button>
      </form>

      <table border="1" >
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>employee</th>
            <th>unemployee</th>

          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.employee}</td>
              <td>{item.unemployee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
