import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./UserList";
import UserDetail from "./UserDetail";
import "./App.css";
import "./UserDetail.css";

function App() {
  return (
    <Router>
      <div style={{ margin: "20px" }}>
        
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
