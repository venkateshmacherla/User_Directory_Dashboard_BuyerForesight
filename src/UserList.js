import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  // Filter by search
  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  // Sort by field
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (!sortField) return 0;
    const valA = sortField === "company" ? a.company.name : a[sortField];
    const valB = sortField === "company" ? b.company.name : b[sortField];
    return sortOrder === "asc"
      ? valA.localeCompare(valB)
      : valB.localeCompare(valA);
  });

  return (
    <div className="container">
      <h1>User Directory Dashboard</h1>

      {/* Controls section */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button onClick={() => { setSortField("name"); setSortOrder("asc"); }}>
          Sort Name ↑
        </button>
        <button onClick={() => { setSortField("name"); setSortOrder("desc"); }}>
          Sort Name ↓
        </button>
        <button onClick={() => { setSortField("company"); setSortOrder("asc"); }}>
          Sort Company ↑
        </button>
        <button onClick={() => { setSortField("company"); setSortOrder("desc"); }}>
          Sort Company ↓
        </button>
        <button className="btnClear" onClick={() => setSearch("")}>
          Clear Search
        </button>
      </div>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Phone</th><th>Company</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map(user => (
            <tr
              key={user.id}
              onClick={() => navigate(`/users/${user.id}`)}
              style={{ cursor: "pointer" }}
            >
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
