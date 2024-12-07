import React, { useState } from "react";
import axios from "axios";

const Problem2 = () => {
  const [records, setRecords] = useState([]);

  const addRecord = async () => {
    const randomId = Math.random() * 10;
    try {
      const response = await axios({
        method: "GET",
        url: `https://swapi.dev/api/people/${randomId.toFixed(0)}`,
      });
      if (response?.status == 200) {
        // debugger;
        const person = response.data;
        console.log(person);
        const newRecord = {
          name: person?.name,
        };
        setRecords((prevRecords) => [...prevRecords, newRecord]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRecord = (index) => {
    setRecords((prevRecords) => prevRecords.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Problem 2</h1>
      <button onClick={addRecord}>Add Record</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <td>{record.name}</td>
              <td>
                <button onClick={() => deleteRecord(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Problem2;
