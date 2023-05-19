import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const Employees = () => {
  const [info, setInfo] = useState();
  const [serachName, setSerachName] = useState("");
  const [filterSkills, setFilterSkills] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json"
      )
      .then((res) => {
        console.log(res.data);
        setInfo(res.data);
      });
  }, []);
  return (
    <div className="info">
      <table>
        <thead>
          <tr className="heading">
            <td>Designation</td>
            <td>Id</td>
            <td>
              Name
              <br></br>
              <input
                type="text"
                placeholder="Search by name"
                value={serachName}
                onChange={(e) => setSerachName(e.target.value)}
              ></input>
            </td>
            <td>Projects</td>
            <td>
              Skills
              <br></br>
              <select
                value={filterSkills}
                onChange={(e) =>
                  setFilterSkills(
                    e.target.value === "select" ? null : e.target.value
                  )
                }
              >
                <option>select</option>
                <option>JavaScript</option>
                <option>HTML</option>
                <option>CSS</option>
                <option>Python</option>
                <option>Photoshop</option>
              </select>
            </td>
          </tr>
        </thead>
        <tbody>
          {info &&
            info.employees.map(
              (emp) =>
                emp.name &&
                (emp.name.startsWith(serachName) ||
                  (filterSkills && emp.skills.includes(filterSkills))) && (
                  <tr className="employee-row">
                    <td className="designation">{emp.designation}</td>
                    <td className="id">{emp.id}</td>
                    <td className="name">{emp.name}</td>
                    <td className="projects">
                      {emp.projects
                        ? emp.projects.map((p) => <p>{p.name},</p>)
                        : "no projects"}
                    </td>
                    <td className="skills">
                      {emp.skills
                        ? emp.skills.map((s) => <p>{s},</p>)
                        : "no skills"}
                    </td>
                  </tr>
                )
            )}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
