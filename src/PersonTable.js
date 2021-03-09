import React, { useState, useEffect } from "react";

import Table from "react-bootstrap/Table";

const PersonTable = ({ list }) => {
  const [persons, setPersons] = useState([{}]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((results) => results.json())
      .then((json) => json.results)
      .then((persons) => {
        setPersons(persons);
      });
    // .then((names) => {
    //   return names.map((name) => name.first);
    // })
    // .then((firstNames) => {
    //   setPersons(firstNames);
    // });
  }, []);

  return (
    // <p>{JSON.stringify(persons, null, 2)}</p>
    <Table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Gender</td>
        </tr>
      </thead>
      <tbody className="text-white">
        {persons.map(
          (person, i) =>
            person && (
              <tr key={i}>
                <td>{person.name.first}</td>
              </tr>
            )
        )}
      </tbody>
    </Table>
  );
};

export default PersonTable;
