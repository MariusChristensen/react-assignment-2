import React, { useState } from "react";

const mockData = [
  { username: "Ola Normann", email: "ola.normann@norge.no" },
  { username: "Torleif", email: "torleif@kodehode.no" },
  { username: "Jan Egil", email: "jan.egil@kodehode.no" },
  { username: "Sander", email: "sander@kodehode.no" },
];

const Users = () => {
  const [users, setUsers] = useState(mockData);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    setError("");

    if (!username.trim()) {
      setError("Username is required");
      return;
    }

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    const newUser = { username, email };
    setUsers((prevUsers) => [...prevUsers, newUser]);

    // Clear the fields
    setUsername("");
    setEmail("");
  };

  return (
    <div className="section users-section">
      <div className="component-content">
        <h2>Users</h2>

        <form onSubmit={handleAddUser} className="user-form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              aria-label="Username"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="add-button">
            Add User
          </button>
        </form>

        <ul className="user-list">
          {users.map((user, index) => (
            <li key={index} className="user-item">
              <strong>{user.username}</strong> — {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
